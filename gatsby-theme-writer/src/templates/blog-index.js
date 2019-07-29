import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"
import FeaturedPosts from "./featured-posts"

const BlogIndexTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <FeaturedPosts />
      <Posts posts={pageContext.posts} />
    </Layout>
  )
}

export default BlogIndexTemplate
