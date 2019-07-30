module.exports = options => ({
  siteMetadata: {
    title: "Gatsby Theme Writer",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.contentPath || `content/blog`,
        name: options.contentPath || `content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: options.assetsPath || `content/assets`,
        name: options.assetsPath || `content/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `@weknow/gatsby-remark-twitter`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
})
