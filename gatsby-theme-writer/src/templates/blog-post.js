import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PostMetadata from "../components/post-metadata"
import Image from "gatsby-image"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Image
          sx={{ marginBottom: 4 }}
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <Styled.h1 sx={{ marginBottom: 1 }}>{post.frontmatter.title}</Styled.h1>
        <PostMetadata
          formattedDate={post.frontmatter.date}
          timeToRead={post.timeToRead}
        />
        <div
          sx={{ fontSize: 3 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <ul
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
