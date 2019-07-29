/** @jsx jsx */
import { jsx } from "theme-ui"

const Grid = ({ columns, children, padding = 3 }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridColumnGap: 3,
        gridTemplateColumns: ["repeat(1, 1fr)", `repeat(${columns}, 1fr)`],
        padding: 3,
      }}
    >
      {children}
    </div>
  )
}

export default Grid
