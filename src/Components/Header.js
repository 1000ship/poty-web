import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'
import styled from "styled-components";

const HeaderContainer = styled.div`
    color: white;
    background-color: #161616;
    padding: 10px;
    font-size: 30px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 1;
`

const Title = styled(Link)`
    color: white;
    transition: 0.3s;
    font-weight: 500;
    &:hover {
        color: #ADADAD;
        text-decoration: none;
    }
`

const Header = props => {
    const { location : { pathname } } = props
    return (
    <HeaderContainer>
        <Container>
            <Row>
                <Col>
                    <Title to="/">POTY</Title>
                </Col>
            </Row>
        </Container>
    </HeaderContainer>
)}

export default withRouter( Header )