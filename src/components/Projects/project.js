import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

const Container = styled.div`
    color: #282828;
    background: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 5px 12px 4px rgb(40 40 40 / 12%);
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
    margin-top: 1.5rem;
`
const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffffff;
    background: #ff4c61;
    border: none;
    border-radius: 25px;
`

const Project = ({ className, project, onClick }) => {
    const data = useStaticQuery(graphql`
        query {
            visitorvalet_bg: file(relativePath: { eq: "visitorvalet-bg.jpg" }) {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            applications_bg: file(relativePath: { eq: "applications-bg.jpg" }) {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            automations_bg: file(relativePath: { eq: "automations-bg.jpg" }) {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pegasus_bg: file(relativePath: { eq: "pegasus-imagery-bg.jpg" }) {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ea_mondo_bg: file(relativePath: { eq: "ea-mondo-bg.jpg" }) {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kijiji_bg: file(relativePath: { eq: "kijiji-bg.jpg" }) {
                name
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
            <Screenshot fluid={data[project.background].childImageSharp.fluid} alt={data[project.background].name} />
            <Content>
                <Title>{project.name}</Title>
                <Description>{project.description}</Description>
                {(project.link || project.github) && (
                    <ButtonContainer>
                        {project.link && (
                            <Link href={project.link} target="_blank" rel="noreferrer">
                                View Project
                                <AiOutlineLink size="2.6rem" fill="#ffffff" style={{ marginLeft: "0.5rem" }} />
                            </Link>
                        )}
                        {project.github && (
                            <Link href={project.github} target="_blank" rel="noreferrer">
                                View on GitHub
                                <AiOutlineGithub size="2.4rem" fill="#ffffff" style={{ marginLeft: "0.5rem" }} />
                            </Link>
                        )}
                    </ButtonContainer>
                )}
            </Content>
        </Container>
    )
}

export default Project
