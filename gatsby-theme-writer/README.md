# Gatsby Theme Writer

This is a minimal blogging theme intended to focus on content and readability.

See the [live demo](https://gatsby-theme-writer.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @beccanelson/gatsby-theme-writer
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ["@beccanelson/gatsby-theme-writer"],
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Configuration

You can configure your site metadata in `gatsby-config.js`. Optionally, you can also configure your `basePath`, `contentPath`, and `assetsPath`.

Example configuration:

```js
module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    author: "Becca Bailey",
    description:
      "A short description of your site. This will appear in your bio.",
    siteUrl: "http://my-site.com",
    social: {
      twitter: "my-twitter",
      instagram: "my-instagram",
    },
  },
}
```

If you would like to add an avatar, the bio component will look for a file named `avatar.[jpeg|jpg|gif|png]`. This should go in your assets folder.

## Adding Blog Posts

This theme currently supports markdown posts. For more information about markdown syntax, [check out this guide](https://www.markdownguide.org/cheat-sheet/).

To keep a post organized witn its assets, we can create a folder structure like this:

```
content/
  blog/
    my-first-post/
      index.md
      featured.jpg
```

In addition to the markdown content, each post needs frontmatter in order to display and categorize it.

```yaml
---
title: My First Blog Post!
date: "2019-07-28"
featuredImage: "./featured.jpg"
featured: true
---

```

For more information, see the `demo/` in this repository.

## Featured Posts

To add a post to the featured posts module, set `featured` to `true` in the post frontmatter. Also, for best results make sure you have set a featured image for the post. This module supports up to two featured posts at a time. Note: these posts will still appear in the main posts list as well.

## Contributing

If you are using this theme, I appreciate issues and pull requests!
