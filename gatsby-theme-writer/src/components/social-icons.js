import React from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "./icons"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Grid from "./grid"
import { useStaticQuery } from "gatsby"

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
}

const SocialIcons = () => {
  const data = useStaticQuery(socialQuery)
  const social = data.site.siteMetadata.social
  const keys = Object.keys(social)
  return (
    <Flex sx={{ justifyContent: "center" }}>
      <Grid columns={keys.length} padding={2} responsive={false}>
        {keys.map(name => {
          const Icon = socialIcons[name]
          return (
            <a title={name} href={social[name]}>
              <Icon fill={"#333"} />
            </a>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default SocialIcons

const socialQuery = graphql`
  query Social {
    site {
      siteMetadata {
        social {
          instagram
          twitter
        }
      }
    }
  }
`
