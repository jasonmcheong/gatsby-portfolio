import React from "react"
import styled from "styled-components"
import { AiOutlineHome, AiOutlineIdcard, AiOutlineUnorderedList, AiOutlineCode, AiOutlineTrophy, AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const Container = styled.nav`
    transition: all 0.3s ease-in;
    display: grid;
    grid-template-rows: auto 10rem;
    align-items: center;
    gap: 6rem;
    height: calc(100vh - 6rem);
    padding: 2rem;
    color: #ffffff;
    background: #343353;
    opacity: ${props => (props.open ? "1" : "0")};
    visibility: ${props => (props.open ? "visible" : "hidden")};

    @media screen and (min-width: 992px) {
        height: 90vh;
        opacity: 1;
        visibility: visible;
        border-right: 1px solid rgb(255 255 255 / 10%);
    }
`
const List = styled.ul`
    transition: all 0.3s ease-in;
    display: grid;
    gap: 4rem;
    align-items: center;
    margin: 0;
    padding-top: 5rem;
    transform: ${props => (props.open ? "translateY(0)" : "translateY(-3rem)")};

    @media screen and (min-width: 992px) {
        padding-top: 0;
        transform: translateY(0);
    }
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

    @media screen and (min-width: 992px) {
        align-self: flex-end;
    }
`
const SocialMedia = styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-between;
    font-size: 4rem;
    margin-bottom: 2rem;
`
const Link = styled.a`
    display: flex;
    align-items: center;
    color: #ffffff;
`
const Copyright = styled.span`
    font-size: 1.2rem;
    text-align: center;
`

const Navigation = ({ open, close }) => {
    return (
        <Container open={open}>
            <List open={open}>
                <ListItem>
                    <Link href="#" onClick={close}>
                        <AiOutlineHome /> <Content>Home</Content>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#about" onClick={close}>
                        <AiOutlineIdcard /> <Content>About</Content>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#experience" onClick={close}>
                        <AiOutlineUnorderedList /> <Content>Experience</Content>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#projects" onClick={close}>
                        <AiOutlineCode /> <Content>Projects</Content>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#skills" onClick={close}>
                        <AiOutlineTrophy /> <Content>Skills</Content>
                    </Link>
                </ListItem>
            </List>
            <Footer>
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
                <Copyright>© {new Date().getFullYear()} All rights reseverd.</Copyright>
            </Footer>
        </Container>
    )
}

export default Navigation
