import { Link } from "gatsby"
import Image from "gatsby-image"
import { Styled } from "theme-ui"
import PostMetadata from "./post-metadata"
/** @jsx jsx */
import { jsx } from "theme-ui"

const FeaturedPost = ({
  title,
  formattedDate,
  descriptionHTML,
  slug,
  fluidImageData,
  timeToRead,
}) => {
  return (
    <article>
      <Link to={slug}>
        <Image sx={{ maxHeight: 250 }} fluid={fluidImageData} />
      </Link>
      <Styled.h2 sx={{ marginBottom: 0 }}>{title}</Styled.h2>
      <PostMetadata timeToRead={timeToRead} formattedDate={formattedDate} />
      <p>
        {descriptionHTML} <Link to={slug}>Read more</Link>
      </p>
    </article>
  )
}

export default FeaturedPost
