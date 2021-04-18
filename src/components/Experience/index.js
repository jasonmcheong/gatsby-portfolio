import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

import Container from "components/Utils/container"
import Project from "components/Projects/project"

const Jobs = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
`
const Job = styled.div`
    padding-left: 3.5rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 2rem;
        left: 0.9rem;
        width: 2px;
        height: calc(100% - 2rem);
        background: #282828;
    }
`
const Bullseye = styled.img`
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 0.1rem;
    left: 0rem;
`
const Company = styled.h3``
const Role = styled.span``
const Timeline = styled.p`
    opacity: 0.9;
`
const Projects = styled.div`
    display: grid;
    gap: 3rem;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const jobs = [
    {
        company: "PCL Construction",
        role: "Technology Analyst",
        timeline: "2019 - Present",
        projects: [
            {
                id: uuidv4(),
                name: "VisitorValet",
                description: "An enterprise digital visitor management system that streamlines the process of screening, tracking and managing visitors accross multiple locations.",
                link: "https://www.visitorvalet.com/",
                technologies: ["AngularJS", "ServiceNow"],
                background: "visitorvalet_bg",
            },
            {
                id: uuidv4(),
                name: "Internal Web Applications",
                description: "Built numerous internal web applications which harness the power of the ServiceNow platform to satisfy complex business needs.",
                technologies: ["AngularJS", "PowerShell", "ServiceNow"],
                background: "applications_bg",
            },
            {
                id: uuidv4(),
                name: "Automations",
                description: "Built and maintained CI/CD pipelines to increase productivity and eliminate manual processes.",
                technologies: ["PowerShell", "ServiceNow", "Azure", "Azure DevOps"],
                background: "automations_bg",
            },
        ],
    },
    {
        company: "Freelance",
        role: "Front-End Developer",
        timeline: "2019",
        projects: [
            {
                id: uuidv4(),
                name: "Pegasus Imagery",
                description: "A static site using the single page application architecture to deliver an app-like experience to all device platforms.",
                link: "https://jasonmcheong.com/pegasus/",
                github: "https://github.com/jasonmcheong/pegasus-react",
                technologies: ["React", "WordPress"],
                background: "pegasus_bg",
            },
            {
                id: uuidv4(),
                name: "Promise Project",
                description: "A progressive web application with customizable questions that gathers and stores a user's promise to learn Esperanto.",
                link: "https://ea-mondo.org/pp/multi/",
                github: "https://github.com/jasonmcheong/promise-project",
                technologies: ["React", "WordPress", "Amazon Web Services"],
                background: "ea_mondo_bg",
            },
        ],
    },
]

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            bullseye: file(relativePath: { eq: "bullseye-icon.svg" }) {
                publicURL
                name
            }
        }
    `)

    return (
        <Container id="experience" title="Experience">
            <Jobs>
                {jobs.map(job => {
                    return (
                        <Job key={uuidv4()}>
                            <Bullseye src={data.bullseye.publicURL} alt={data.bullseye.name} />
                            <Company>{job.company}</Company>
                            <Role>{job.role}</Role>
                            <Timeline>{job.timeline}</Timeline>
                            <Projects>
                                {job.projects.map(project => {
                                    return <Project key={uuidv4()} project={project} />
                                })}
                            </Projects>
                        </Job>
                    )
                })}
            </Jobs>
        </Container>
    )
}

export default Experience
