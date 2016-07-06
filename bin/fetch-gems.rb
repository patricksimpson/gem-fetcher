require "slack"
require "yaml"
require "dotenv"
require "pathname"
require "fileutils"
Dotenv.load

token = ENV["TOKEN"] || (print "Token: "; gets.strip)
$client = Slack::Client.new token: token

# Get users list
puts 'fetching latest data...'
$more = true
$messages = []

class Client
  GEMS_CHANNEL_ID = 'C02V6AFJP'

  attr_reader :timestamp
  def initialize(timestamp)
    @timestamp = timestamp
  end

  def history
    slack.channels_history channel: GEMS_CHANNEL_ID, count: 1000, latest: timestamp, inclusive: true
  end

  def messages
    history['messages']
  end

  def users
    @users ||= slack.users_list['members'].collect do |m|
      User.new m['name'], m['id']
    end
  end

  def has_more?
    history['has_more']
  end

  private

  def slack
    @slack ||= Slack::Client.new(token: ENV["TOKEN"])
  end
end

class User
  attr_accessor :name, :slack_id
  def initialize(name, slack_id)
    @name = name
    @slack_id = slack_id
  end
end

class GemGetter

  def self.fetch
    loop do
      puts $last_ts
      break if !get_messages($last_ts)
    end

    File.open('public/data/gems-approved.json', 'w')  do |f|
      f.write $messages.reverse.to_json
    end
  end


  def self.get_messages(ts)
    slack = Client.new(ts)
    messages = slack.messages
    puts "We have #{messages.count} messages starting at '#{ts}' time"
    messages.each do |message|
      has_public = false
      disapproved = false
      start_text = ""
      text = ""
      if reactions = message["reactions"]
        reactions.each do |r|
          if  /^earth_*/.match(r["name"])
            has_public = true
            user_name = slack.users.select { |user| user.name == message['user'] }.first
            text = message["text"].inspect
            if user_name == "gem-me-bot"
              start_text = ""
            else
              start_text = "#{user_name}: "
            end
            if users_mentioned = text.scan(/\<\@(U[A-Z0-9]+)\>/)
              users_mentioned.each do |u|
                puts u
                user_mention = slack.users.select { |user| user.slack_id == u[0] }.first.name
                text = text.sub("<@#{u[0]}>", "@#{user_mention}")
              end
            end
          end
          if  /^x/.match(r["name"])
            disapproved = true
          end
        end
        if has_public and !disapproved
          $messages.push("#{text}")
          puts "gem count #{$messages.count}"
        end
      end
    $last_ts = message["ts"]
    end

    slack.has_more?
  end
end
