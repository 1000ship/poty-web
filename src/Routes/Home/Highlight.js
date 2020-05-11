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
            videoId: props.videoId,
            lastUpdate: props.lastUpdate,
            rank: props.rank,
            totalLikeCount: props.totalLikeCount,
            totalReplyComment: props.totalReplyComment,
            timestamp: props.timestamp,
            comments: props.comments,
            youtubeSeekTo: props.youtubeSeekTo,
        }
    }

    timestampToSecond ( timestamp )
    {
        let second = 0
        let multiply = 1
        let arr = timestamp.split(":")
        for( let i = arr.length - 1; i >= 0; -- i )
        {
            second += multiply * Number(arr[i])
            multiply *= 60
        }
        return second
    }

    render () {
        const { videoId, lastUpdate, rank, totalLikeCount, totalReplyComment, timestamp, comments, youtubeSeekTo } = this.state
        return (
            <Container>
                <TimestampButton href="#" onClick={(e)=>youtubeSeekTo(this.timestampToSecond(timestamp), true)}>
                    <Timestamp>
                        {timestamp}
                    </Timestamp>
                </TimestampButton>
                <LikeDisplay>
                    {`👍${totalLikeCount}`}
                </LikeDisplay>
            </Container>
        )
    }
}

export default Highlight