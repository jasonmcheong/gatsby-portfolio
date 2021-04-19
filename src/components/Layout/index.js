import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
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
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <StyledLayout>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
            </Helmet>
            <Header />
            <Main>{children}</Main>
        </StyledLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
