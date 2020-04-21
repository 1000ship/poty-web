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

class Highlight extends React.Component {

    constructor( props )
    {
        super( props )
        this.state = {
            timestamp: props.timestamp,
            likes: props.likes,
        }
    }

    render () {
        const { timestamp, likes } = this.state
        return (
            <Container>
                <TimestampButton href="#">
                    <Timestamp>
                        {timestamp}
                    </Timestamp>
                </TimestampButton>
                <LikeDisplay>
                    {`👍${likes}`}
                </LikeDisplay>
            </Container>
        )
    }
}

export default Highlight