import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

import SectionTitle from "components/Utils/section_title"

const Container = styled.section`
    padding: 2rem;
`
const projects = [
    {
        name: "Kijiji Reposter (Work in Progress)",
        description: "Fun little automation that will keep my posts at the top of the page ;)",
        link: "github.com/jasonmcheong?id=kijiji_reposter",
        stack: ["Python"],
    },
]

// TODO: Create a "Project" component to house the listed information

const Projects = () => (
    <Container>
        <SectionTitle title="Projects" />
        {projects.map(project => {
            return (
                <div key={uuidv4()}>
                    <h4>{project.name}</h4>
                    <a href={project.link}></a>
                    <p>{project.description}</p>
                    {project.stack.map(tech => {
                        return <p key={uuidv4()}>{tech}</p>
                    })}
                </div>
            )
        })}
    </Container>
)

export default Projects
