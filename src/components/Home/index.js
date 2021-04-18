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
    height: 90vh;
`
const Center = styled.div``
const Logo = styled(Img)`
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 3rem;
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
            logo: file(relativePath: { eq: "logo.png" }) {
                name
                childImageSharp {
                    fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <Container>
            <Center>
                <Logo fixed={data.logo.childImageSharp.fixed} alt={data.logo.name} />
                <Name>Jason Cheong</Name>
                <Title>Aspiring tech guru</Title>
                <SocialMedia>
                    <Link href="mailto:jasonmcheong@gmail.com">
                        <AiOutlineMail fill="#ffffff" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jasonmcheong/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin fill="#ffffff" />
                    </Link>
                    <Link href="https://github.com/jasonmcheong" target="_blank" rel="noreferrer">
                        <AiOutlineGithub fill="#ffffff" />
                    </Link>
                </SocialMedia>
            </Center>
        </Container>
    )
}

export default Home
