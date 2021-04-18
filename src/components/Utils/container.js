import React from "react"
import styled from "styled-components"

import SectionTitle from "components/Utils/section_title"

const StyledContainer = styled.section`
    margin: 0 auto;
    padding: 3rem 1.5rem;
    max-width: 1080px;
`

const Container = ({ id, title, children }) => {
    return (
        <StyledContainer id={id}>
            <SectionTitle title={title} />
            {children}
        </StyledContainer>
    )
}
export default Container
