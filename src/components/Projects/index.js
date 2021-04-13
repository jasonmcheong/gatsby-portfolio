import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

import SectionTitle from "components/Utils/section_title"
import Project from "components/Projects/project"

const Container = styled.section`
    padding: 1.5rem;
`

const projects = [
    {
        name: "Kijiji Reposter (Work in Progress)",
        description: "Fun little automation that will keep my posts at the top of the page ;)",
        link: "github.com/jasonmcheong?id=kijiji_reposter",
        technologies: ["Python"],
    },
]

const Projects = () => (
    <Container>
        <SectionTitle title="Projects" />
        {projects.map(project => {
            return <Project key={uuidv4()} project={project} />
        })}
    </Container>
)

export default Projects
