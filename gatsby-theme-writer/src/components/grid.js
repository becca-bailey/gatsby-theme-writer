import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Grid = ({ columns, children, padding = 3, responsive = true }) => {
  columns = responsive
    ? ["repeat(1, 1fr)", `repeat(${columns}, 1fr)`]
    : `repeat(${columns}, 1fr)`
  return (
    <div
      sx={{
        display: "grid",
        gridColumnGap: padding,
        gridTemplateColumns: columns,
      }}
    >
      {children}
    </div>
  )
}

export default Grid
