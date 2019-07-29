const fs = require("fs")

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "content"
  const blogPath = `${contentPath}/blog`
  const assetsPath = `${contentPath}/assets`

  const paths = [contentPath, blogPath, assetsPath]

  // each of these paths must exist, or gatsby-source-filesystem will throw an error
  paths.forEach(path => {
    if (!fs.existsSync(path)) {
      reporter.info(`Creating the ${path} directory`)
      fs.mkdirSync(path)
    }
  })

  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = ({ actions, reporter }, options) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: options.basePath || "/",
    component: require.resolve("./src/templates/page.js"),
  })
}
