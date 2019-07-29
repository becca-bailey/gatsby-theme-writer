/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"

const SiteTitle = ({ baseUrl, children }) => {
  return (
    <a
      href={baseUrl}
      sx={{
        textDecoration: "none",
        color: "text",
        paddingLeft: 4,
        paddingRight: 4,
      }}
    >
      <h1 sx={{ fontFamily: "title" }}>{children}</h1>
    </a>
  )
}

export default SiteTitle
