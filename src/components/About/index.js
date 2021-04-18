import React from "react"
import styled from "styled-components"

import Container from "components/Utils/container"

const Content = styled.div`
    padding: 2rem;
    background: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 5px 12px 4px rgb(40 40 40 / 12%);
`
const Description = styled.p``
const Button = styled.button`
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 0;
    color: #ffffff;
    background: #ff4c61;
    border: none;
    border-radius: 25px;
`

const About = () => (
    <Container title="About">
        <Content>
            <Description>Hi I'm Jason, a programmer with a deep passion for web development, with the goal of one day becoming the ultimate tech guru. What facinates me the most about this industry is the community and the ever growing innovations. The programming community is just a vast wealth of knowledge to learn from and I take an active part in sharing my accumulated knowledge with others to empower them to grow alongside me. With new technologies popping up every day, it's hard not to see how they can bring value to myself or my team. I've since embraced the power of automation and try to incorporate it into my daily workflow whenever possible so I can focus on doing what I do best.</Description>
            <Button>Download CV</Button>
        </Content>
    </Container>
)

export default About
