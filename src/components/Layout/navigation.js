import React from "react"
import styled from "styled-components"
import { AiOutlineHome, AiOutlineIdcard, AiOutlineUnorderedList, AiOutlineCode, AiOutlineTrophy, AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const Container = styled.nav`
    display: grid;
    gap: 6rem;
    height: 90vh;
    padding: 2rem;
    background: #faf9ff;
`
const List = styled.ul`
    display: grid;
    gap: 1.5rem;
    margin: 0;
    padding-top: 5rem;
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
    margin: 0.5rem 0 0 1.5rem;
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
const Link = styled.a``
const Copyright = styled.span`
    font-size: 1.2rem;
    text-align: center;
`

const Navigation = () => (
    <Container>
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
                <Link href="mailto:jasonmcheong@gmail.com">
                    <AiOutlineMail fill="#282828" />
                </Link>
                <Link href="https://www.linkedin.com/in/jasonmcheong/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin fill="#282828" />
                </Link>
                <Link href="https://github.com/jasonmcheong" target="_blank" rel="noreferrer">
                    <AiOutlineGithub fill="#282828" />
                </Link>
            </SocialMedia>
            <Copyright>© {new Date().getFullYear()} All rights reseverd.</Copyright>
        </Footer>
    </Container>
)

export default Navigation
