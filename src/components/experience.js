import React from "react"
import styled from "styled-components"

import SectionTitle from "../components/section_title"

const Container = styled.section`
    padding: 2rem;
`
const XP = [
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
                name: "Business Facing Automations",
                description: "Automations that will automate",
                stack: ["PowerShell", "ServiceNow", "Azure", "Azure DevOps"],
            },
            {
                name: "Business Facing Applications",
                description: "Built using ServiceNow",
                stack: ["AngularJS", "ServiceNow"],
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

const Experience = () => (
    <Container>
        <SectionTitle title="Experience" />
        {XP.map(item => {
            return (
                <div>
                    <h3>{item.company}</h3>
                    <p>{item.timeline}</p>
                    <span>{item.title}</span>
                    {item.work.map(w => {
                        return (
                            <div>
                                {w.link ? (
                                    <a href={w.link}>
                                        <h4>{w.name}</h4>
                                    </a>
                                ) : (
                                    <h4>{w.name}</h4>
                                )}
                                <p>{w.description}</p>
                                {w.stack.map(s => {
                                    return <p>{s}</p>
                                })}
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </Container>
)

export default Experience
