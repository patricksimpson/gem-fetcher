import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%",
        "fontFamily": "\"Avenir Next\", \"Helvetica Neue\", Helvetica, sans-serif"
    },
    "body": {
        "height": "100%",
        "fontFamily": "\"Avenir Next\", \"Helvetica Neue\", Helvetica, sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#191919"
    },
    "content": {
        "display": "flex",
        "flexDirection": "column",
        "height": 100 * vh,
        "width": 100 * vw,
        "boxSizing": "border-box",
        "position": "relative",
        "alignContent": "flex-start",
        "alignItems": "stretch"
    },
    "header": {
        "background": "#171717",
        "paddingTop": 2 * vh,
        "paddingRight": 2 * vh,
        "paddingBottom": 2 * vh,
        "paddingLeft": 2 * vh,
        "boxSizing": "border-box",
        "boxShadow": "0 1px #222",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "main-logo": {
        "height": 2.5 * vmax,
        "display": "flex",
        "alignItems": "center",
        "marginRight": 2.5 * vmax
    },
    "logo--svg": {
        "height": "100%",
        "fill": "#555"
    },
    "logo--icon": {
        "fill": "black"
    },
    "title": {
        "color": "#555",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 2 * vmax,
        "fontWeight": 400,
        "textTransform": "uppercase",
        "letterSpacing": 1 * vmax
    },
    "gem": {
        "color": "#50b7c8",
        "boxSizing": "border-box",
        "alignSelf": "center",
        "flexGrow": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 10 * vw,
        "paddingBottom": 10 * vh,
        "paddingLeft": 10 * vw,
        "maxWidth": 100 * vw,
        "fontSize": 4 * vw,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "drawer": {
        "backgroundColor": "black",
        "position": "fixed",
        "width": 100 * vw,
        "display": "flex",
        "height": 10 * vh,
        "top": 100 * vh,
        "justifyContent": "space-between",
        "alignItems": "stretch",
        "transition": "top ease-in-out 150ms"
    },
    "drawer:hover": {
        "top": 90 * vh
    },
    "drawer:before": {
        "content": "'Options'",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "color": "#333",
        "fontSize": 2 * vh,
        "fontWeight": 700,
        "textTransform": "uppercase",
        "letterSpacing": 0.25 * vh,
        "position": "absolute",
        "bottom": "100%",
        "left": 0,
        "height": 10 * vh,
        "width": 100 * vw,
        "transition": "height ease-in-out 150ms, opacity ease-in-out 150ms"
    },
    "drawer:hover:before": {
        "height": 0,
        "opacity": 0
    },
    "button": {
        "background": "transparent",
        "display": "block",
        "fontFamily": "\"Avenir Next\", \"Helvetica Neue\", Helvetica, sans-serif",
        "fontSize": 2 * vh,
        "fontWeight": 700,
        "textTransform": "uppercase",
        "letterSpacing": 0.25 * vh,
        "marginTop": "10pt",
        "marginRight": "10pt",
        "marginBottom": "10pt",
        "marginLeft": "10pt",
        "paddingTop": 1 * vh,
        "paddingRight": 2 * vw,
        "paddingBottom": 1 * vh,
        "paddingLeft": 2 * vw,
        "color": "white",
        "border": "2pt solid #50b7c8",
        "transition": "background 250ms ease-in-out"
    },
    "button:hover": {
        "background": "#171717"
    },
    "button + button": {
        "marginLeft": 0
    },
    "link": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "fontFamily": "\"Avenir Next\", \"Helvetica Neue\", Helvetica, sans-serif",
        "fontSize": 2 * vh,
        "fontWeight": 700,
        "textTransform": "uppercase",
        "letterSpacing": 0.25 * vh,
        "marginTop": "10pt",
        "marginRight": "10pt",
        "marginBottom": "10pt",
        "marginLeft": "10pt",
        "paddingTop": "calc(1vh",
        "paddingRight": "+",
        "paddingBottom": "4pt)",
        "paddingLeft": "calc(2vw",
        "color": "#50b7c8",
        "textDecoration": "none"
    },
    "link span": {
        "transition": "box-shadow 250ms ease-in-out"
    },
    "link:hover span": {
        "boxShadow": "0 2pt white"
    },
    "meta": {
        "display": "flex",
        "alignItems": "stretch"
    },
    "bar-timer": {
        "height": "2pt",
        "position": "fixed",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": 100 * vw,
        "background": "#333",
        "transition": "bottom ease-in-out 150ms"
    },
    "bar-inner": {
        "content": "''",
        "display": "block",
        "position": "fixed",
        "bottom": 0,
        "left": 0,
        "height": "2pt",
        "zIndex": 1,
        "background": "#50b7c8",
        "animation": "timerBar 30s linear infinite",
        "transition": "bottom ease-in-out 150ms"
    },
    "drawer:hover + bar-timer": {
        "bottom": 10 * vh
    },
    "drawer:hover + bar-timer bar-inner": {
        "bottom": 10 * vh
    }
});