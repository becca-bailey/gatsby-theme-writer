import React from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "./icons"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Grid from "./grid"
import { useStaticQuery } from "gatsby"
import baseTheme from "gatsby-theme-writer/src/gatsby-plugin-theme-ui"

const defaultTransformer = value => value

export const urlTransformers = {
  facebook: value => `https://facebook.com/${value}`,
  twitter: value => `https://twitter.com/${value}`,
  linkedin: value => `https://linkedin.com/in/${value}`,
  instagram: value => `https://instagram.com/${value}`,
}

export const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
}

const SocialIcons = ({
  icons = socialIcons,
  transformers = urlTransformers,
}) => {
  const data = useStaticQuery(socialQuery)
  const social = data.site.siteMetadata.social
  const keys = Object.keys(social)
  return (
    <Flex sx={{ justifyContent: "center" }}>
      <Grid columns={keys.length} padding={2} responsive={false}>
        {keys.map(name => {
          const Icon = icons[name]
          const urlTransformer = transformers[name] || defaultTransformer
          const url = urlTransformer(social[name])
          return (
            <a title={name} href={url} key={name}>
              <Icon fill={baseTheme.colors.gray[2]} />
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
