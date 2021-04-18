import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "components/Layout/header"

import "styles/main.css"

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
}

const StyledLayout = styled.div`
    @media screen and (min-width: 992px) {
        display: flex;
    }
`
const Main = styled.main`
    width: 100%;
    margin: 0 auto;
`

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
            <Main>{children}</Main>
        </StyledLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
