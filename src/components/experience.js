import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SectionTitle from "../components/section_title"

const Container = styled.section`
    padding: 2rem;
`

const Icon = styled(Img)`
    width: 2rem;
    height: 2rem;
    left: 50%;
    transform: translateX(-50%);
`

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "gatsby-icon.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Container>
            <SectionTitle title="Experience" />
        </Container>
    )
}

export default Experience
