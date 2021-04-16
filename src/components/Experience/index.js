import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

import Container from "components/Utils/container"
import Modal from "components/Utils/modal"
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
        background: #000;
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
    opacity: 0.8;
`
const Projects = styled.div`
    display: grid;
    grid-template-columns;
    gap: 3rem;
    margin-top: 2rem;
`

const jobs = [
    {
        company: "PCL Construction",
        role: "Technology Analyst",
        timeline: "2019 - Present",
        projects: [
            {
                name: "VisitorValet",
                description: "An enterprise digital visitor management system that streamlines the process of screening, tracking and managing visitors accross multiple locations.",
                link: "visitorvalet.com",
                technologies: ["AngularJS", "ServiceNow"],
            },
            {
                name: "Internal Web Applications",
                description: "Built numerous internal web applications which harness the power of the ServiceNow platform to satisfy complex business needs.",
                technologies: ["AngularJS", "PowerShell", "ServiceNow"],
            },
            {
                name: "Automations",
                description: "Built and maintained CI/CD pipelines to increase productivity and eliminate manual processes.",
                technologies: ["PowerShell", "ServiceNow", "Azure", "Azure DevOps"],
            },
        ],
    },
    {
        company: "Freelance",
        role: "Front-End Developer",
        timeline: "2019",
        projects: [
            {
                name: "Pegasus Imagery",
                description: "A static site using the single page application architecture to deliver an app-like experience to all device platforms.",
                link: "jasonmcheong.com/pegaus-imagery",
                technologies: ["React", "WordPress"],
            },
            {
                name: "Promise Project",
                description: "A progressive web application with customizable questions that gathers and stores a user's promise to learn Esperanto.",
                link: "jasonmcheong.com/ea-mondo",
                technologies: ["React", "WordPress", "Amazon Web Services"],
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

    const [modal, setModal] = useState()

    return (
        <Container title="Experience">
            <Jobs>
                {jobs.map(job => {
                    return (
                        <Job key={uuidv4()}>
                            <Bullseye src={data.bullseye.publicURL} alt={data.bullseye.name} />
                            <Company>{job.company}</Company>
                            <Role>{job.role}</Role>
                            <Timeline>{job.timeline}</Timeline>
                            <Projects>
                                {job.projects.map((project, index) => {
                                    var uuid = uuidv4()
                                    return (
                                        <div key={uuid}>
                                            <Modal open={index === modal} close={() => setModal()}>
                                                <h2>Title</h2>
                                            </Modal>
                                            <h2 onClick={() => setModal(index)}>Open</h2>
                                            <Project project={project} />
                                        </div>
                                    )
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
