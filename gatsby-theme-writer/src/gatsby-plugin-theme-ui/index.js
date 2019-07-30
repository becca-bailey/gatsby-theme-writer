/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    background: "#fff",
    primary: "#4d13d1",
    gray: ["#efefef", "#ddd", "#888", "#333", "#111"],
  },
  fonts: {
    heading: "Rubik, sans-serif",
    title: "Petit Formal Script, sans-serif",
    default: "Lora, serif",
  },
  fontSizes: [14, 18, 20, 22, 27, 36, 48],
  lineHeights: {
    text: "1.55",
    heading: "1.1",
  },
  sizes: {
    container: 800,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 2,
      lineHeight: "text",
    },
    Header: {
      marginTop: 2,
      display: "flex",
      justifyContent: "center",
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    Footer: {
      margin: "0 auto",
      maxWidth: "container",
      padding: 3,
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
      fontFamily: "heading",
      fontWeight: 400,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      fontWeight: 400,
    },
  },
}
