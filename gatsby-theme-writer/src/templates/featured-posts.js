import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedPosts from "../components/featured-posts"

const FeaturedPostsTemplate = () => {
  const { allMarkdownRemark } = useStaticQuery(featuredPostsQuery)
  const { nodes: posts } = allMarkdownRemark
  return <FeaturedPosts posts={posts} />
}

const featuredPostsQuery = graphql`
  query FeaturedPosts {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 2
    ) {
      nodes {
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
      }
    }
  }
`
export default FeaturedPostsTemplate
