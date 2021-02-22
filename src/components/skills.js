import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import SectionTitle from "./section_title"

const Container = styled.section`
    padding: 2rem;
`

const SkillWrapper = styled.div`
    display: grid;
`

const Skills = () => {
    const data = useStaticQuery(graphql`
        query {
            angularjs: file(relativePath: { eq: "angularjs-icon.svg" }) {
                publicURL
            }
            azure: file(relativePath: { eq: "azure-icon.svg" }) {
                publicURL
            }
            javascript: file(relativePath: { eq: "javascript-icon.svg" }) {
                publicURL
            }
            powershell: file(relativePath: { eq: "powershell-icon.svg" }) {
                publicURL
            }
            react: file(relativePath: { eq: "react-icon.svg" }) {
                publicURL
            }
            sass: file(relativePath: { eq: "sass-icon.svg" }) {
                publicURL
            }
            servicenow: file(relativePath: { eq: "servicenow-icon.svg" }) {
                publicURL
            }
        }
    `)

    return (
        <Container>
            <SectionTitle title="Skills" />
            <SkillWrapper>
                <img src={data.angularjs.publicURL} />
                <h3>AngularJS</h3>
            </SkillWrapper>
        </Container>
    )
}

export default Skills
