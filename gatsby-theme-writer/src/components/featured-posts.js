import Grid from "./grid"
import FeaturedPost from "./featured-post"
import { useStaticQuery } from "gatsby"
/** @jsx jsx */
import { jsx } from "theme-ui"

const FeaturedPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(featuredPostsQuery)
  return (
    <div
      sx={{
        border: "1px solid #eee",
        backgroundColor: "#fcfcfc",
        borderRadius: 4,
        padding: 3,
      }}
    >
      <Grid columns={allMarkdownRemark.nodes.length}>
        {allMarkdownRemark.nodes.map(post => (
          <FeaturedPost
            key={post.id}
            title={post.frontmatter.title}
            formattedDate={post.frontmatter.date}
            descriptionHTML={post.excerpt}
            fluidImageData={
              post.frontmatter.featuredImage.childImageSharp.fluid
            }
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
          />
        ))}
      </Grid>
    </div>
  )
}

export default FeaturedPosts

const featuredPostsQuery = graphql`
  query FeaturedPosts {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 2
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        timeToRead
        id
      }
    }
  }
`
