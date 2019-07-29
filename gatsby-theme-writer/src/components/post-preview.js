import { Link } from "gatsby"
import { Styled } from "theme-ui"
import PostMetadata from "./post-metadata"
/** @jsx jsx */
import { jsx } from "theme-ui"

const PostPreview = ({
  title,
  formattedDate,
  descriptionHTML,
  slug,
  timeToRead,
}) => {
  return (
    <article>
      <Styled.h2 sx={{ marginBottom: 0 }}>{title}</Styled.h2>
      <PostMetadata timeToRead={timeToRead} formattedDate={formattedDate} />
      <p>
        {descriptionHTML} <Link to={slug}>Read more</Link>
      </p>
    </article>
  )
}

export default PostPreview
