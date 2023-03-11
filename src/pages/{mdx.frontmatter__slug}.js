import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const BlogPost = () => {
    return (
        <Layout pageTitle="Blog Post title...">
            <p>Blog post will go here...</p>
        </Layout>
    )
}

export const Head = () => <Seo title={""} />

export default BlogPost