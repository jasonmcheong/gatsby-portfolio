import React from "react"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"

const ModalBehind = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    visibility: ${props => (props.open ? `visible` : `hidden`)};
    opacity: ${props => (props.open ? `1` : `0`)};
    transition: 0.5s;
    z-index: 2;
`
const ModalDiv = styled.div`
    display: grid;
    align-items: center;
    box-sizing: border-box;
    place-self: center;
    background: blue;
    height: max-content;
    max-height: 80vh;
    width: 80vw;
    position: relative;
    overflow: scroll;
    border-radius: 0.5em;
    transition: 0.3s;
    box-shadow: 0 0 3em black;
    margin: calc(0.5em + 2vw);
`

const Modal = ({ open, close, children }) => (
    <ModalBehind open={open} onClick={close}>
        <ModalDiv onClick={event => event.stopPropagation()}>
            <button onClick={close}>Close</button>
            {children}
        </ModalDiv>
    </ModalBehind>
)

export default Modal
