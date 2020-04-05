import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'
import styled from "styled-components";

const HeaderContainer = styled.div`
color: white;
background-color: black;
padding: 10px;
font-size: 40px;
`

const Header = props => {
    const { location : { pathname } } = props
    return (
    <HeaderContainer>
        <Container>
            <Row>
                <Col>POTY</Col>
            </Row>
        </Container>
    </HeaderContainer>
)}

export default withRouter( Header )