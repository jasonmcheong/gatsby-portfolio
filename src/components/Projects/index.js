import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

import Container from "components/Utils/container"
import Project from "components/Projects/project"

const ProjectWrapper = styled.div`
    display: grid;
    gap: 3rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const projects = [
    {
        name: "Kijiji Ad Reposter (Work in Progress)",
        description: "A fun little automation that bumps my listings to the first page.",
        github: "https://github.com/jasonmcheong/kijiji-ad-reposter",
        technologies: ["Python"],
        background: "kijiji_bg",
    },
]

const Projects = () => (
    <Container id="projects" title="Projects">
        <ProjectWrapper>
            {projects.map(project => {
                return <Project key={uuidv4()} project={project} />
            })}
        </ProjectWrapper>
    </Container>
)

export default Projects
