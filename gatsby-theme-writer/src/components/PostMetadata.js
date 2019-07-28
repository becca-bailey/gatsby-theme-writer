import React from "react"
import { Link } from "gatsby"

const PostMetadata = ({ author, formattedDate }) => {
  return (
    <small>
      {author && (
        <>
          <Link to={author.url}>{author.name}</Link>
          {" | "}
        </>
      )}
      {formattedDate}
    </small>
  )
}

export default PostMetadata
