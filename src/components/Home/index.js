import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const Container = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #343353;
    width: 100%;
    height: 100vh;
`
const Center = styled.div``
const Logo = styled(Img)`
    width: 15rem;
    height: 15rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 3rem;
`
const Name = styled.h1``
const Title = styled.p`
    font-size: 2.3rem;
    text-align: center;
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
const MailboxIcon = styled(AiOutlineMail)`
    transition: all 0.3s ease-in-out;
    fill: #ffffff;

    &:hover {
        fill: #ffd05c;
    }
`
const LinkedInIcon = styled(AiFillLinkedin)`
    transition: all 0.3s ease-in-out;
    fill: #ffffff;

    &:hover {
        fill: #ffd05c;
    }
`
const GitHubIcon = styled(AiOutlineGithub)`
    transition: all 0.3s ease-in-out;
    fill: #ffffff;

    &:hover {
        fill: #ffd05c;
    }
`

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
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
        <Container>
            <Center>
                <Logo fluid={data.logo.childImageSharp.fluid} alt={data.logo.name} />
                <Name>Jason Cheong</Name>
                <Title>Aspiring tech guru</Title>
                <SocialMedia>
                    <Link href="mailto:jasonmcheong@gmail.com">
                        <MailboxIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jasonmcheong/" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://github.com/jasonmcheong" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </Link>
                </SocialMedia>
            </Center>
        </Container>
    )
}

export default Home
