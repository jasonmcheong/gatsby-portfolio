import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

import SectionTitle from "components/Utils/section_title"
import Project from "components/Projects/project"

const Container = styled.section`
    padding: 1.5rem;
`
const Jobs = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
`
const Job = styled.div`
    overflow: hidden;
    padding-left: 3.5rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 2rem;
        left: 0.9rem;
        width: 2px;
        height: 100%;
        background: #000;
    }
`
const Bullseye = styled.img`
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 0.2rem;
    left: 0rem;
`
const Company = styled.h3`
    margin-bottom: 0.3rem;
`
const Role = styled.span``
const Timeline = styled.p`
    opacity: 0.8;
    margin-top: 0.7rem;
`
const Projects = styled.div`
    display: grid;
    grid-template-columns;
    gap: 2rem;
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
                description: "Visitor management system that saved the company x amount of dollars",
                link: "visitorvalet.com",
                technologies: ["AngularJS", "ServiceNow"],
            },
            {
                name: "Internal Web Applications",
                description: "Built using ServiceNow",
                technologies: ["AngularJS", "ServiceNow"],
            },
            {
                name: "Automated Processes",
                description: "Automations that will automate",
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
                description: "Static site using React and Wordpress. Basic information site",
                link: "jasonmcheong.com/pegaus-imagery",
                technologies: ["React", "WordPress"],
            },
            {
                name: "Promise Project",
                description: "Progressive web application that has offline capability, used to retrieve user information on who promises to learn Esperanto",
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

    return (
        <Container>
            <SectionTitle title="Experience" />
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
