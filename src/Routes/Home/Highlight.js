import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 15px 3px;
`

const TimestampButton = styled.a`
    &:hover {
        text-decoration: none;
    }
`

const Timestamp = styled.span`
    color: #5d9cec;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 3px;
    display: block;
`

const LikeDisplay = styled.span`
    display: block;
    font-weight: 500;
    color: #666;
`

export default ( props ) => {
    return (<Container>
        <TimestampButton href="#">
            <Timestamp>
                {props.timestamp}
            </Timestamp>
        </TimestampButton>
        <LikeDisplay>
            {`👍${props.likes}`}
        </LikeDisplay>
    </Container>)
}