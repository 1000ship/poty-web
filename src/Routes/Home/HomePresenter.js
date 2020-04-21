import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from "styled-components";
import YouTube from 'react-youtube';
import Highlight from './Highlight'

const youtubeVideoId = "aDZ4zG36oRQ"

const youtubeOpts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      enablejsapi: 1,
      modestbranding: 1,
    //   rel: 0,
    //   showinfo: 0,
    //   playlist: [],
    },
  }


var youtubePlayer = null;

function youtubeReady ( e ) {
    console.log( e.target )
    youtubePlayer = e.target.pauseVideo();
}

function youtubeSeekTo ( seconds, allowSeekAhead )
{
    if( youtubePlayer )
        youtubePlayer.seekTo( seconds, allowSeekAhead );
}

const highlights = [{timestamp: "4:13:12", likes: 20}]

const HomePresenter = (  ) => (
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