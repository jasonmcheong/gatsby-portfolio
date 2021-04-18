import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Navigation from "components/Layout/navigation"

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    height: 0;
    z-index: 1000;

    @media screen and (min-width: 992px) {
        width: 35rem;
        height: 0;
    }
`
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6rem;
    color: #ffffff;
    background: #343353;
    border-right: 1px solid rgb(255 255 255 / 10%);

    @media screen and (min-width: 992px) {
        height: 10vh;
    }
`
const Logo = styled(Img)`
    width: 4rem;
    height: 4rem;
    margin: 1.2rem 1rem;

    @media screen and (min-width: 992px) {
        display: block;
        width: 8rem;
        height: 8rem;
        margin: 2rem auto;
    }
`
const Toggle = styled.div`
    display: flex;
    padding: 1rem;
    height: 100%;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 992px) {
        display: none;
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
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const windowSize = useWindowSize()
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if (windowSize.width < 992) {
            document.body.style.overflow = menu ? "hidden" : null
        }
    }, [menu, windowSize])

    return (
        <StyledHeader open={menu}>
            <Navbar>
                <Logo fluid={data.logo.childImageSharp.fluid} alt={data.logo.name} />
                <Toggle onClick={() => setMenu(!menu)}>
                    <Hamburger open={menu} />
                </Toggle>
            </Navbar>
            <Navigation open={menu} close={() => setMenu(false)} />
        </StyledHeader>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return windowSize
}

export default Header
