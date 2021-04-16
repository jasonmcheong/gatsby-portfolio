import React from "react"
import styled from "styled-components"

import Container from "components/Utils/container"

const Description = styled.p``
const Button = styled.button`
    width: 100%;
    margin-top: 2rem;
    padding: 0.75rem 0;
    color: #fff;
    background: tomato;
    border: none;
    border-radius: 25px;
`

const About = () => (
    <Container title="About">
        <Description>Hi I'm Jason, a programmer with a deep passion for web development, with the goal of one day becoming the ultimate tech guru. What facinates me the most about this industry is the community and the ever growing innovations. The programming community is just a vast wealth of knowledge to learn from and I take an active part in sharing my accumulated knowledge with others to empower them to grow alongside me. With new technologies popping up every day, it's hard not to see how they can bring value to myself or my team. I've since embraced the power of automation and try to incorporate it into my daily workflow whenever possible so I can focus on doing what I do best.</Description>
        <Button>Download CV</Button>
    </Container>
)

export default About
