import React from "react"
import PostPreview from "./post-preview"

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostPreview
          key={post.node.id}
          title={post.node.frontmatter.title}
          formattedDate={post.node.frontmatter.date}
          descriptionHTML={post.node.excerpt}
          timeToRead={post.node.timeToRead}
          slug={post.node.fields.slug}
        />
      ))}
    </>
  )
}

export default Posts
