import React from "react"

const PostMetadata = ({ timeToRead, formattedDate }) => {
  return (
    <small>
      {formattedDate} | {`${timeToRead || 0} minute read`}
    </small>
  )
}

export default PostMetadata
