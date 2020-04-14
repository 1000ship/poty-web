import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from "styled-components";
import YouTube from 'react-youtube';

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

export default () => (<>
    <Container fluid={true}>
        <Row>
            <Col xs="12" md="8" lg="9" className="embed-responsive embed-responsive-16by9">
                <YouTube videoId={youtubeVideoId} opts={youtubeOpts}/>
            </Col>
            <Col xd="12" md="4" lg="3">Highlight List</Col>
        </Row>
        <Row>
            <Col xs="12">
                Comments List
            </Col>
        </Row>
    </Container>
</>)