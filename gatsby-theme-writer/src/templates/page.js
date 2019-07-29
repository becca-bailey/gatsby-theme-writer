import React from "react"
import Layout from "../components/layout"
import FeaturedPosts from "./featured-posts"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <FeaturedPosts />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
