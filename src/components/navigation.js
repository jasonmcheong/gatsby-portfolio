import React from "react"
import styled from "styled-components"
import { AiOutlineHome, AiOutlineIdcard, AiOutlineUnorderedList, AiOutlineCode, AiOutlineTrophy, AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const Container = styled.nav`
    display: grid;
    gap: 6rem;
    height: 100vh;
    padding: 2rem;
`

const Heading = styled.h1`
    align-self: center;
`

const List = styled.ul`
    display: grid;
    gap: 0.5rem;
    margin: 0;
`

const ListItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 3.2rem;
`

const Content = styled.span`
    font-size: 2.4rem;
    font-weight: bold;
    margin-left: 1.5rem;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const SocialMedia = styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-between;
    font-size: 4rem;
    margin-bottom: 2rem;
`

const Copyright = styled.span`
    font-size: 1.2rem;
    text-align: center;
`

const Navigation = () => (
    <Container>
        <Heading>Jason Cheong</Heading>
        <List>
            <ListItem>
                <AiOutlineHome /> <Content>Home</Content>
            </ListItem>
            <ListItem>
                <AiOutlineIdcard /> <Content>About</Content>
            </ListItem>
            <ListItem>
                <AiOutlineUnorderedList /> <Content>Experience</Content>
            </ListItem>
            <ListItem>
                <AiOutlineCode /> <Content>Projects</Content>
            </ListItem>
            <ListItem>
                <AiOutlineTrophy /> <Content>Skills</Content>
            </ListItem>
        </List>
        <Footer>
            <SocialMedia>
                <AiOutlineMail />
                <AiFillLinkedin style={{ fill: "#0077B5" }} />
                <AiOutlineGithub style={{ fill: "#171516" }} />
            </SocialMedia>
            <Copyright>© {new Date().getFullYear()} All rights reseverd.</Copyright>
        </Footer>
    </Container>
)

export default Navigation
