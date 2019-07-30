import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"
import FeaturedPosts from "./featured-posts"
import Bio from "../components/bio"

const BlogIndexTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <Bio />
      <FeaturedPosts />
      <Posts posts={pageContext.posts} />
    </Layout>
  )
}

export default BlogIndexTemplate
