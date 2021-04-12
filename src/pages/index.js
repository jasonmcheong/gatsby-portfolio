import React from "react"
import { Link } from "gatsby"

import Image from "components/Utils/image"
import SEO from "components/Utils/seo"

import Layout from "components/Layout"
import Home from "components/Home"
import About from "components/About"
import Experience from "components/Experience"
import Projects from "components/Projects"
import Skills from "components/Skills"

const IndexPage = () => (
    <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <SEO title="Home" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
)

export default IndexPage
