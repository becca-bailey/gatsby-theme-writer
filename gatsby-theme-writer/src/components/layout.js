import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SiteTitle from "./SiteTitle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  )
}

export default Layout
