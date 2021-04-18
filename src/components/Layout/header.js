import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Navigation from "components/Layout/navigation"

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
`
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    color: #ffffff;
    background: #343353;
`
const Logo = styled(Img)`
    margin: 0.75rem 1rem;
`
const Toggle = styled.div`
    display: flex;
    padding: 1rem;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`
const Hamburger = styled.div`
    transition: all 0.3s linear;
    align-self: center;
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
    position: relative;

    ::before,
    ::after {
        transition: all 0.3s linear;
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: #ffffff;
    }

    ::before {
        transform: ${props => (props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)")};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
`

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                name
                childImageSharp {
                    fixed(width: 40, height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        document.body.style.overflow = menu ? "hidden" : null
    }, [menu])

    return (
        <StyledHeader>
            <Navbar>
                <Logo fixed={data.logo.childImageSharp.fixed} alt={data.logo.name} />
                <Toggle onClick={() => setMenu(!menu)}>
                    <Hamburger open={menu} />
                </Toggle>
            </Navbar>
            {menu && <Navigation />}
        </StyledHeader>
    )
}

export default Header
