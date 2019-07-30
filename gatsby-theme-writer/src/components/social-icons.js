import React from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "./icons"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Grid from "./grid"

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
}

const SocialIcons = ({ social }) => {
  const keys = Object.keys(social)
  return (
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
  )
}

export default SocialIcons
