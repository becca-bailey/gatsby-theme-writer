// eslint-disable-next-line
import React from "react"
import Image from "gatsby-image"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  return (
    <Flex
      sx={{
        borderTop: "1px solid #eee",
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 3,
        alignItems: "center",
        flexDirection: ["column", "row"],
      }}
    >
      {data.avatar && (
        <Image
          sx={{
            borderRadius: "50%",
            marginRight: 3,
            minWidth: [150, 120],
            minHeight: [150, 120],
          }}
          fixed={data.avatar.childImageSharp.fixed}
        />
      )}
      <p>{data.site.siteMetadata.description}</p>
    </Flex>
  )
}

export default Bio

const bioQuery = graphql`
  query Bio {
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`
