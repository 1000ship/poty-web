import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from "styled-components";
import YouTube from 'react-youtube';
import Highlight from './Highlight'


const HomePresenter = ( { youtubeVideoId, highlights, youtubeSeekTo, youtubeReady, youtubeOpts } ) => (
    <Container className="pt-2">
        <Row>
            <Col xs="12" md="8" lg="9" className="embed-responsive embed-responsive-16by9">
                <YouTube videoId={youtubeVideoId} opts={youtubeOpts} onReady={youtubeReady}/>
            </Col>
            <Col xd="12" md="4" lg="3">
                { highlights && 
                    highlights.map( highlight =>
                        <Highlight 
                            timestamp={highlight.timestamp}
                            likes={highlight.likes}
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