import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
import Experience from "../components/experience"

const IndexPage = () => (
    <Layout>
        <Home />
        <About />
        <Experience />
        <SEO title="Home" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
)

export default IndexPage
