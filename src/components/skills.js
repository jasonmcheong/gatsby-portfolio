import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import SectionTitle from "./section_title"

const Container = styled.section`
    padding: 2rem;
`

const SkillWrapper = styled.div`
    display: grid;
    gap: 3rem 1rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
`

const Skill = styled.div`
    text-align: center;
`

const Icon = styled.img`
    width: 7rem;
    height: 7rem;
`

const Skills = () => {
    const data = useStaticQuery(graphql`
        query {
            AngularJS: file(relativePath: { eq: "angularjs-icon.svg" }) {
                publicURL
                name
            }
            Azure: file(relativePath: { eq: "azure-icon.svg" }) {
                publicURL
                name
            }
            JavaScript: file(relativePath: { eq: "javascript-icon.svg" }) {
                publicURL
                name
            }
            PowerShell: file(relativePath: { eq: "powershell-icon.svg" }) {
                publicURL
                name
            }
            React: file(relativePath: { eq: "react-icon.svg" }) {
                publicURL
                name
            }
            SASS: file(relativePath: { eq: "sass-icon.svg" }) {
                publicURL
                name
            }
            ServiceNow: file(relativePath: { eq: "servicenow-icon.svg" }) {
                publicURL
                name
            }
        }
    `)

    return (
        <Container>
            <SectionTitle title="Skills" />
            <SkillWrapper>
                {Object.keys(data).map(key => {
                    return (
                        <Skill key={data[key].name}>
                            <Icon src={data[key].publicURL} alt={data[key].name} />
                            <h3>{key}</h3>
                        </Skill>
                    )
                })}
            </SkillWrapper>
        </Container>
    )
}

export default Skills
