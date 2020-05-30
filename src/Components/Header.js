import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
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
    display: inline-block;
`

const SearchInput = styled(Input)`
    background: unset;
    color: #6c757d;
    border-color: #6c757d;
    &:focus {
        background-color: unset;
        color: #6c757d;
    }
`

const typeInSearch = (e) => {
    console.log(e.target.value);
}

const searchTo = (e) => {
    console.log(123);
}

const Header = props => {
    const { location : { pathname } } = props
    return (
    <HeaderContainer>
        <Container>
            <Row>
                <Col xs="auto">
                    <Title to="/">POTY</Title>
                </Col>
                <Col>
                    <InputGroup>
                        <SearchInput onChange={typeInSearch} color="secondary"/>
                        <InputGroupAddon addonType="append">
                            <Button onClick={searchTo} outline color="secondary">검색</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    </HeaderContainer>
)}

export default withRouter( Header )