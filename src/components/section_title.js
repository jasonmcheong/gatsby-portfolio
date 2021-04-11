import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
    margin-bottom: 3rem;
    position: relative;
`

const Dots = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`

const Title = styled.h2`
    padding: 2rem 0 0 1.75rem;
`

const SectionTitle = props => {
    const data = useStaticQuery(graphql`
        query {
            dots: file(relativePath: { eq: "dots-icon.svg" }) {
                name
                publicURL
            }
        }
    `)

    return (
        <Container>
            <Dots src={data.dots.publicURL} alt={data.dots.name} />
            <Title>{props.title}</Title>
        </Container>
    )
}

export default SectionTitle
