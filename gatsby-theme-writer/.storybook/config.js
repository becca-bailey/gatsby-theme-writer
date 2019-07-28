import { addDecorator, configure } from "@storybook/react"
import React from "react"
import { ThemeProvider } from "theme-ui"
import "../gatsby-browser" // Imports fonts, etc.
import theme from "../src/gatsby-plugin-theme-ui"

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Adds styling from theme-ui
// Update this at gatsby-plugin-theme-ui/index.js
const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

addDecorator(ThemeDecorator)

configure(loadStories, module)
