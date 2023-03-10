import React from "react"

import Layout from "../components/layout/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is the home page.</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
