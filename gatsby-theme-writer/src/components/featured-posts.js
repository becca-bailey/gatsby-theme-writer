import Grid from "./grid"
import FeaturedPost from "./featured-post"
/** @jsx jsx */
import { jsx } from "theme-ui"

const FeaturedPosts = ({ posts }) => {
  return (
    <div
      sx={{
        border: "1px solid #eee",
        backgroundColor: "#fcfcfc",
        borderRadius: 4,
      }}
    >
      <Grid columns={posts.length}>
        {posts.map(post => (
          <FeaturedPost
            title={post.frontmatter.title}
            formattedDate={post.frontmatter.date}
            descriptionHTML={post.excerpt}
            fluidImageData={
              post.frontmatter.featuredImage.childImageSharp.fluid
            }
            timeToRead={post.timeToRead}
          />
        ))}
      </Grid>
    </div>
  )
}

export default FeaturedPosts
