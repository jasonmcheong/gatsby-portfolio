import React from "react"
import styled from "styled-components"
import { AiOutlineHome, AiOutlineIdcard, AiOutlineTrophy, AiOutlineUnorderedList } from "react-icons/ai"

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

const Copyright = styled.span`
    align-self: flex-end;
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
                <AiOutlineTrophy /> <Content>Skills</Content>
            </ListItem>
            <ListItem>
                <AiOutlineUnorderedList /> <Content>Experience</Content>
            </ListItem>
        </List>
        <Copyright>© 2020 All right reseverd.</Copyright>
    </Container>
)

export default Navigation
