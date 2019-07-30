const fs = require("fs")
const mkdirp = require("mkdirp")
const { createFilePath } = require("gatsby-source-filesystem")

let basePath

exports.onPreBootstrap = ({ reporter }, options) => {
  basePath = options.basePath || "/"
  const contentPath = options.contentPath || "content/blog"
  const assetsPath = options.assetsPath || "content/assets"

  const paths = [contentPath, assetsPath]

  // each of these paths must exist, or gatsby-source-filesystem will throw an error
  paths.forEach(path => {
    if (!fs.existsSync(path)) {
      reporter.info(`Creating the ${path} directory`)
      mkdirp(path)
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve("./src/templates/blog-post.js")
  const blogIndexTemplate = require.resolve("./src/templates/blog-index.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
            excerpt(truncate: true)
            fields {
              slug
            }
            timeToRead
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error getting page data", result.errors)
    return
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  createPage({
    path: basePath,
    component: blogIndexTemplate,
    context: {
      posts,
    },
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
