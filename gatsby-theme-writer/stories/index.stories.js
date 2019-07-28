import React from "react"
import SiteTitle from "../src/components/SiteTitle"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { ThemeProvider } from "theme-ui"
import theme from "../src/gatsby-plugin-theme-ui"

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

storiesOf("SiteTitle", module)
  .addDecorator(ThemeDecorator)
  .add("default", () => <SiteTitle baseUrl="/">Gatsby Theme Writer</SiteTitle>)
