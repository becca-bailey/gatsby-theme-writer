/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const SiteTitle = ({ baseUrl, children }) => {
  return (
    <a href={baseUrl} sx={{ textDecoration: "none", color: "text" }}>
      <h1 sx={{ fontFamily: "title" }}>{children}</h1>
    </a>
  )
}

export default SiteTitle
