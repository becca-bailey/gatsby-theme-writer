import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <footer>
      <small
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
      </small>
    </footer>
  )
}

export default Footer
