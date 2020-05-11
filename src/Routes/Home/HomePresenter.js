import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from "styled-components";
import YouTube from 'react-youtube';
import Highlight from './Highlight'


const HomePresenter = ( { videoId, highlights, youtubeSeekTo, youtubeReady, youtubeOpts, loading } ) => (
    <Container className="pt-2">
        <Row>
            <Col xs="12" md="8" lg="9" className="embed-responsive embed-responsive-16by9">
                {loading ? <>asd</> : (
                    <YouTube videoId={videoId} opts={youtubeOpts} onReady={youtubeReady}/>
                )}
            </Col>
            <Col xd="12" md="4" lg="3">
                { highlights && 
                    highlights.map( highlight =>
                        <Highlight 
                            videoId={highlight.videoId}
                            lastUpdate={highlight.lastUpdate}
                            rank={highlight.rank}
                            totalLikeCount={highlight.totalLikeCount}
                            totalReplyComment={highlight.totalReplyComment}
                            timestamp={highlight.timestamp}
                            comments={highlight.comments}
                            youtubeSeekTo={youtubeSeekTo}
                        />
                    )
                }
            </Col>
        </Row>
        <Row>
            <Col xs="12">
                Comments List
            </Col>
        </Row>
    </Container>
)

export default HomePresenter;