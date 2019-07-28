import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const FeaturedPost = ({
  title,
  author,
  formattedDate,
  descriptionHTML,
  slug,
  fluidImageData,
}) => {
  return (
    <article>
      <Image fluid={fluidImageData} />
      <h2>{title}</h2>
      <PostMetadata author={author} formattedDate={formattedDate} />
      <p
        dangerouslySetInnerHTML={{
          __html: descriptionHTML,
        }}
      />
      <Link to={slug}>Read More...</Link>
    </article>
  )
}

export default FeaturedPost
