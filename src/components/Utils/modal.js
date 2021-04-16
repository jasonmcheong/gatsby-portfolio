import React from "react"
import styled from "styled-components"

// TODO: Pass in data from props
// TODO: When active, dim screen and show modal using css

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`

const Modal = props => (
    <div>
        <h2>modal title</h2>
        <p>modal content</p>
        <a href="#">Link</a>
        <a href="#">GitHub</a>
        <a href="#">Close</a>
    </div>
)

export default Modal
