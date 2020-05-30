import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'

const CommentContainer = styled.div`
    margin-bottom: 10px;
`

const CommentUserId = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 1.1;
    margin-right: 5px;
`

const CommentText = styled.span`
    font-size: 13px;
`

const CommentLikeCount = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #888;
    margin-left: 5px;
`

const Comment = ({userId, likeCount, commentText}) => {
    return <CommentContainer>
        <CommentUserId>{userId}</CommentUserId>
        <CommentText>{commentText}</CommentText>
        <CommentLikeCount>👍{likeCount}</CommentLikeCount>
    </CommentContainer>
}

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
    margin-right: 5px;
`

const LikeDisplay = styled.span`
    font-weight: 500;
    color: #888;
`

const Comments = styled.div`
    margin-left: 10px;
    margin-top: 10px;
`

const Rank = styled.span`
    margin-right: 5px;
    font-size: 18px;
    font-weight: 600;
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
        console.log( comments )
        return (
            <Container>
                <Row>
                    <Col>
                        <Rank>{rank}위</Rank>
                        <TimestampButton href="javascript:void(0);" onClick={(e)=>youtubeSeekTo(this.timestampToSecond(timestamp), true)}>
                            <Timestamp>
                                {timestamp}
                            </Timestamp>
                        </TimestampButton>
                        <LikeDisplay>
                            {`👍${totalLikeCount}`}
                        </LikeDisplay>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Comments>
                            {comments.map( comment => 
                                <Comment
                                    userId={comment.userId}
                                    likeCount={comment.likeCount}
                                    commentText = {comment.commentText}
                                ></Comment>
                            )}
                        </Comments>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Highlight