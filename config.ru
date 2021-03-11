require './bin/fetch-gems'
require 'rack/rewrite'

use Rack::Rewrite do
  r301 %r{.*}, 'https://gems.sparkbox.com/', :scheme => 'http'

  r301 %r{.*}, 'https://gems.sparkbox.com$&', :if => Proc.new {|rack_env|
    rack_env['SERVER_NAME'] != 'gems.sparkbox.com'
  }
end

use Rack::Static,
  :urls => ["/images", "/js", "/css", "/data"],
  :root => "public"

run lambda { |env|
  GemGetter.fetch
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
