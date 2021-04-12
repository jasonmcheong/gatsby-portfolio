import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "components/Layout/header"
import Navigation from "components/Layout/navigation"

import "styles/main.css"

const Main = styled.main``

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Navigation />
            {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
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