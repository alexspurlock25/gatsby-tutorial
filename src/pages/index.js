import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is the home page.</p>
      <StaticImage
        alt="An image of a cute dog."
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}
export const Head = () => <Seo title="Home Page"/>

export default IndexPage