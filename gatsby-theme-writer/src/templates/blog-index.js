import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"
import FeaturedPosts from "../components/featured-posts"
import Bio from "../components/bio"
import SEO from "../components/seo"

const BlogIndexTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      <FeaturedPosts />
      <Posts posts={pageContext.posts} />
    </Layout>
  )
}

export default BlogIndexTemplate
