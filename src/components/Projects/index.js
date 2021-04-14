import React from "react"
import { v4 as uuidv4 } from "uuid"

import Container from "components/Utils/container"
import Project from "components/Projects/project"

const projects = [
    {
        name: "Kijiji Ad Reposter (Work in Progress)",
        description: "A fun little automation that bumps my listings to the first page.",
        link: "github.com/jasonmcheong?id=kijiji_reposter",
        technologies: ["Python"],
    },
]

const Projects = () => (
    <Container title="Projects">
        {projects.map(project => {
            return <Project key={uuidv4()} project={project} />
        })}
    </Container>
)

export default Projects
