import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

const Container = styled.div`
    background: #ffe4b5;
    border-radius: 7px;
    box-shadow: 0px 5px 12px 4px #ebebeb;
`
const Screenshot = styled(Img)`
    height: 15rem;
    border-radius: 7px 7px 0 0;
`
const Content = styled.div`
    padding: 2rem 1.5rem;
`
const Title = styled.h4`
    margin-bottom: 1rem;
`
const Description = styled.p``
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
`
const Link = styled.a`
    margin-left: 1rem;
`

const Project = ({ className, project, onClick }) => {
    const data = useStaticQuery(graphql`
        query {
            background: file(relativePath: { eq: "webb-dark.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Container className={className} onClick={onClick}>
            <Screenshot fluid={data.background.childImageSharp.fluid} alt="Jason Cheong Headshot" />
            <Content>
                <Title>{project.name}</Title>
                <Description>{project.description}</Description>
                {(project.link || project.github) && (
                    <ButtonContainer>
                        {project.link && (
                            <Link href={project.link} target="_blank" rel="noreferrer">
                                <AiOutlineLink size="3.5rem" fill="#000" />
                            </Link>
                        )}
                        {project.github && (
                            <Link href={project.github} target="_blank" rel="noreferrer">
                                <AiOutlineGithub size="3.5rem" fill="#000" />
                            </Link>
                        )}
                    </ButtonContainer>
                )}
            </Content>
        </Container>
    )
}

export default Project
