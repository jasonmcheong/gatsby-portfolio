import React from "react"
import styled from "styled-components"

import SectionTitle from "components/Utils/section_title"

const StyledContainer = styled.section`
    padding: 3rem 1.5rem;
`

const Container = ({ title, children }) => {
    return (
        <StyledContainer>
            <SectionTitle title={title} />
            {children}
        </StyledContainer>
    )
}
export default Container
