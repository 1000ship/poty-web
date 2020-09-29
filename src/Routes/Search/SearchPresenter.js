import React from "react";
import styled from "styled-components";
import VideoThumbnail from "Components/VideoThumbnail";
import { Container, Row, Col, Button } from "reactstrap";
import { HeaderSpacer } from "GlobalStyles";
import Loading from "Components/Loading";
import Error from "Components/Error";

const SearchTermDisplay = styled.div`
  padding-top: 20px;
`;

const HomePresenter = ({ query, videos, loading, error, loadVideo }) => (
  <Container>
    <Row>
      <HeaderSpacer></HeaderSpacer>
    </Row>
    <Row>
      <Col>
        <SearchTermDisplay>Search for {query}</SearchTermDisplay>
      </Col>
    </Row>
    <Row>
      {error && <Error error={error} />}
      {videos &&
        videos.length > 0 &&
        videos.map((video, i) => {
          const {
            id: { videoId },
            snippet: { thumbnails, title, channelId, channelTitle },
          } = video;
          return (
            <Col xs="6" md="4" lg="3" key={i}>
              <VideoThumbnail
                id={videoId}
                thumbnailSrc={thumbnails.medium.url}
                title={title}
                channelId={channelId}
                channelTitle={channelTitle}
              ></VideoThumbnail>
            </Col>
          );
        })}
    </Row>
    {loading ? (
      <Loading />
    ) : (
      <Row>
        <Button
          color="secondary"
          size="lg"
          block
          className="m-3"
          onClick={(e) => loadVideo(true)}
        >
          Load more videos
        </Button>
      </Row>
    )}
  </Container>
);

export default HomePresenter;
