import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { AiOutlineLink } from "react-icons/ai"

import SectionTitle from "../components/section_title"

const Container = styled.section`
    padding: 1.5rem;
`
const Jobs = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
    border-radius: 2rem;
    background: red;
`
const Job = styled.div`
    overflow: hidden;
    padding-left: 5rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 2rem;
        left: 2.4rem;
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
    left: 1.5rem;
`
const Company = styled.h3``
const Timeline = styled.p``
const Role = styled.span``
const Projects = styled.div`
    display: grid;
    grid-template-columns;
    gap: 1rem;
    margin-top: 2rem;
`
const Project = styled.div``
const ProjectTitle = styled.h4`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const ProjectLink = styled.a``
const ProjectDescription = styled.p``
const ProjectTechnology = styled.p``

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
                        <Job>
                            <Bullseye src={data.bullseye.publicURL} alt={data.bullseye.name} />
                            <Company>{job.company}</Company>
                            <Timeline>{job.timeline}</Timeline>
                            <Role>{job.role}</Role>
                            <Projects>
                                {job.projects.map(project => {
                                    return (
                                        <Project>
                                            {project.link ? (
                                                <ProjectLink href={project.link} target="_blank" rel="noreferrer">
                                                    <ProjectTitle>
                                                        {project.name} <AiOutlineLink />
                                                    </ProjectTitle>
                                                </ProjectLink>
                                            ) : (
                                                <ProjectTitle>{project.name}</ProjectTitle>
                                            )}
                                            <ProjectDescription>{project.description}</ProjectDescription>
                                            {project.technologies.map(technology => {
                                                return <ProjectTechnology>{technology}</ProjectTechnology>
                                            })}
                                        </Project>
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
