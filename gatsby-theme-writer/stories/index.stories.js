import React from "react"
import SiteTitle from "../src/components/SiteTitle"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

storiesOf("SiteTitle", module).add("default", () => (
  <SiteTitle baseUrl="/">Gatsby Theme Writer</SiteTitle>
))
