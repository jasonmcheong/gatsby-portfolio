import React from "react"
import styled from "styled-components"

const Container = styled.div`
    transition: 1s ease-in-out;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: grid;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: ${props => (props.open ? "visible" : "hidden")};
    opacity: ${props => (props.open ? 1 : 0)};
`
const Content = styled.div`
    display: grid;
    align-items: center;
    box-sizing: border-box;
    place-self: center;
    background: blue;
    height: max-content;
    max-height: 80vh;
    width: 90vw;
    position: relative;
    overflow: scroll;
    border-radius: 0.5em;
    box-shadow: 0 0 3em black;
    margin: calc(0.5em + 2vw);
`

const Modal = ({ open, close, children }) => (
    <Container open={open} onClick={close}>
        <Content onClick={event => event.stopPropagation()}>{children}</Content>
    </Container>
)

export default Modal
