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

export default () => (<>
    <Container className="pt-2">
        <Row>
            <Col xs="12" md="8" lg="9" className="embed-responsive embed-responsive-16by9">
                <YouTube videoId={youtubeVideoId} opts={youtubeOpts}/>
            </Col>
            <Col xd="12" md="4" lg="3">
                <Highlight timestamp="4:46:13" likes="189"/>
                <Highlight timestamp="1:12:23" likes="93"/>
                <Highlight timestamp="3:11:43" likes="47"/>
            </Col>
        </Row>
        <Row>
            <Col xs="12">
                Comments List
            </Col>
        </Row>
    </Container>
</>)