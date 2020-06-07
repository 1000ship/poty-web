import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from "styled-components";
import YouTube from 'react-youtube';
import Highlight from './Highlight'
import {HeaderSpacer} from 'GlobalStyles'
import Error from 'Components/Error';

const TheaterPresenter = ( {videoId, highlights, youtubeSeekTo, youtubeReady, youtubeOpts, loading, error } ) => (
    <Container className="pt-2">
        <HeaderSpacer/>
        { error && <Error error={error}/> }
        <Row>
            <Col xs="12" lg="8" xl="9">
                <div className="embed-responsive embed-responsive-16by9">
                    {loading ? <>Now Loading</> : (
                        <YouTube videoId={videoId} opts={youtubeOpts} onReady={youtubeReady}/>
                    )}
                </div>
            </Col>
            <Col xd="12" lg="4" xl="3">
                { highlights && 
                    highlights.map( (highlight,i) =>
                        <Highlight 
                            key={i}
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
                {/* Comments List */}
            </Col>
        </Row>
    </Container>
)

export default TheaterPresenter;