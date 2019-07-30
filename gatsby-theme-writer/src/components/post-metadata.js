import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const PostMetadata = ({ timeToRead, formattedDate }) => {
  return (
    <small
      sx={{
        fontFamily: "heading",
        textTransform: "uppercase",
        fontWeight: 100,
        fontSize: 0,
      }}
    >
      {formattedDate} | {`${timeToRead || 0} minute read`}
    </small>
  )
}

export default PostMetadata
