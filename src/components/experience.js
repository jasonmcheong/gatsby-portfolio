import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import SectionTitle from "../components/section_title"

const Container = styled.section`
    padding: 1.5rem;
`

const Jobs = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    border-radius: 2rem;
    background: teal;
    padding: 2rem 0;
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

const Works = styled.div`
    display: grid;
    grid-template-columns;
    gap: 2rem;
`

const Work = styled.div`
    background: wheat;
`

const jobs = [
    {
        company: "PCL Construction",
        title: "Technology Analyst",
        timeline: "2019 - Present",
        work: [
            {
                name: "VisitorValet",
                description: "Visitor management system that saved the company x amount of dollars",
                link: "visitorvalet.com",
                stack: ["AngularJS", "ServiceNow"],
            },
            {
                name: "Internal Web Applications",
                description: "Built using ServiceNow",
                stack: ["AngularJS", "ServiceNow"],
            },
            {
                name: "Automated Processes",
                description: "Automations that will automate",
                stack: ["PowerShell", "ServiceNow", "Azure", "Azure DevOps"],
            },
        ],
    },
    {
        company: "Freelance",
        title: "Front-End Developer",
        timeline: "2019",
        work: [
            {
                name: "Pegasus Imagery",
                description: "Static site using React and Wordpress. Basic information site",
                link: "jasonmcheong.com/pegaus-imagery",
                stack: ["React", "WordPress"],
            },
            {
                name: "Promise Project",
                description: "Progressive web application that has offline capability, used to retrieve user information on who promises to learn Esperanto",
                link: "jasonmcheong.com/ea-mondo",
                stack: ["React", "WordPress", "Amazon Web Services"],
            },
        ],
    },
]

// TODO: Create a "Job" component to house the listed information

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            bullseye: file(relativePath: { eq: "bullseye-icon.svg" }) {
                publicURL
                name
            }
        }
    `)

    console.log(data)

    return (
        <Container>
            <SectionTitle title="Experience" />
            <Jobs>
                {jobs.map(job => {
                    return (
                        <Job>
                            <Bullseye src={data.bullseye.publicURL} alt={data.bullseye.name} />
                            <h3>{job.company}</h3>
                            <p>{job.timeline}</p>
                            <span>{job.title}</span>
                            <Works>
                                {job.work.map(w => {
                                    return (
                                        <Work>
                                            {w.link ? (
                                                <a href={w.link} target="_blank">
                                                    <h4>{w.name}</h4>
                                                </a>
                                            ) : (
                                                <h4>{w.name}</h4>
                                            )}
                                            <p>{w.description}</p>
                                            {w.stack.map(s => {
                                                return <p>{s}</p>
                                            })}
                                        </Work>
                                    )
                                })}
                            </Works>
                        </Job>
                    )
                })}
            </Jobs>
        </Container>
    )
}

export default Experience
