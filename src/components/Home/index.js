import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const Container = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
    background: PapayaWhip;
    height: 100vh;
`
const Center = styled.div``
const Headshot = styled(Img)`
    width: 10rem;
    height: 10rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2rem;
`
const Name = styled.h1``
const Title = styled.p`
    font-size: 2.3rem;
    margin-top: 0.5rem;
`
const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 4rem;
    margin: 2rem auto;
`
const Link = styled.a``

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            headshot: file(relativePath: { eq: "gatsby-icon.png" }) {
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
            <Center>
                <Headshot fluid={data.headshot.childImageSharp.fluid} alt="Jason Cheong Headshot" />
                <Name>Jason Cheong</Name>
                <Title>Aspiring tech guru</Title>
                <SocialMedia>
                    <Link href="mailto:jasonmcheong@gmail.com">
                        <AiOutlineMail fill="#000000" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jasonmcheong/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin fill="#0077B5" />
                    </Link>
                    <Link href="https://github.com/jasonmcheong" target="_blank" rel="noreferrer">
                        <AiOutlineGithub fill="#171516" />
                    </Link>
                </SocialMedia>
            </Center>
        </Container>
    )
}

export default Home
