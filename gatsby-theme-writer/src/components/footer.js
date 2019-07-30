// eslint-disable-next-line
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <footer
      sx={{
        fontFamily: "heading",
        textTransform: "uppercase",
        fontWeight: 100,
        fontSize: 0,
      }}
    >
      © {new Date().getFullYear()}, Powered by
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
