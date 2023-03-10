import React from 'react'

import Layout from '../components/layout/layout'

const About = () => {
    return (
        <Layout pageTitle="About Me">
            <p>This is the about page.</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default About