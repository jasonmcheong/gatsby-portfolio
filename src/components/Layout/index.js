import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "components/Layout/header"

import "styles/main.css"

const Main = styled.main``

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <footer
                style={{
                    marginTop: `2rem`,
                }}
            >
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
