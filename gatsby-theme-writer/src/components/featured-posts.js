import FeaturedPost from "./featured-post"
/** @jsx jsx */
import { jsx } from "theme-ui"

const FeaturedPosts = ({ posts }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridColumnGap: 3,
        gridTemplateColumns: "repeat(2, 1fr)",
        padding: 3,
        border: "1px solid #eee",
        backgroundColor: "#fcfcfc",
        borderRadius: 4,
      }}
    >
      {posts.map(post => (
        <FeaturedPost
          title={post.frontmatter.title}
          formattedDate={post.frontmatter.date}
          descriptionHTML={post.excerpt}
          fluidImageData={post.frontmatter.featuredImage.childImageSharp.fluid}
          timeToRead={post.timeToRead}
        />
      ))}
    </div>
  )
}

export default FeaturedPosts
