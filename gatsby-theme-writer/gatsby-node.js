const fs = require("fs")
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "content/blog"
  const assetsPath = options.assetsPath || "content/assets"

  const paths = [contentPath, assetsPath]

  // each of these paths must exist, or gatsby-source-filesystem will throw an error
  paths.forEach(path => {
    if (!fs.existsSync(path)) {
      reporter.info(`Creating the ${path} directory`)
      fs.mkdirSync(path)
    }
  })
}

exports.createPages = async ({ reporter, graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
