import React from "react"

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
    </Layout>
)

export default IndexPage
