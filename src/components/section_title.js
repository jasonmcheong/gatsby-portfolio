import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Icon = styled(Img)`
    width: 2rem;
    height: 2rem;
    left: 50%;
    transform: translateX(-50%);
`

const SectionTitle = props => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "dots.svg" }) {
                publicURL
            }
        }
    `)
    return (
        <div>
            <img src={data.file.publicURL} alt="9 dots icon" />
            <h2>{props.title}</h2>
        </div>
    )
}

export default SectionTitle
