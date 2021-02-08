import React from "react"
import styled from "styled-components"

import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

const Container = styled.section``

const SubHeading = styled.p`
    font-size: 2.3rem;
`

const SocialMedia = styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-between;
    font-size: 4rem;
    margin-bottom: 2rem;
`

const Home = () => (
    <Container>
        <h1>Jason Cheong</h1>
        <SubHeading>I'm a developer</SubHeading>
        <SocialMedia>
            <AiOutlineMail />
            <AiOutlineLinkedin />
            <AiOutlineGithub />
        </SocialMedia>
    </Container>
)

export default Home
