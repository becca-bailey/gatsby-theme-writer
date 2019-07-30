import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer as StyledFooter,
} from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SiteTitle from "./site-title"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
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
        <SiteTitle baseUrl={data.site.siteMetadata.siteUrl}>
          {data.site.siteMetadata.title}
        </SiteTitle>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledLayout>
  )
}

export default Layout
