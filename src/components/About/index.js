import React from "react"
import styled from "styled-components"

import Container from "components/Utils/container"

const Description = styled.div``
const Hook = styled.p`
    margin-bottom: 3rem;
`
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
        <Description>
            <Hook>I couldn't stop...</Hook>
            <p>The pounding of each keystroke echoes throughout. Error on line 22 didn't even stand a chance. With coffee coursing through my system, pure bliss was finally achieved the "zone/coding high". Through all the chaos...a new application was born.</p>
            <p>Do it once, do it right. devloping, testing and maintaining apps that spans over 100s of locations accross the organization</p>
            <Button>Download CV</Button>
        </Description>
    </Container>
)

export default About
