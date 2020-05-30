import React from 'react'
import styled from 'styled-components'
import { Alert } from 'reactstrap'

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px;
    text-align: center;
`

export default ({error}) => {
    const {request:{status}, message} = error
    return (
        <Container>
            <Alert color="dark">
                <h4 className="alert-heading">Error {status}</h4>
                <p>{message}</p>
            </Alert>
        </Container>
    )
}