import React from "react";
import styled from "styled-components";
import VideoThumbnail from "Components/VideoThumbnail";
import { Container, Row, Col } from "reactstrap";
import { HeaderSpacer } from "GlobalStyles";
import Loading from "Components/Loading";
import Error from "Components/Error";

const VideosContainer = styled(Row)``;

const HomePresenter = ({ videos, loading, error }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <HeaderSpacer></HeaderSpacer>
      <VideosContainer>
        {error && <Error error={error} />}
        {videos &&
          videos.length > 0 &&
          videos.map((video, i) => {
            const {
              id,
              snippet: { thumbnails, localized, channelId, channelTitle },
            } = video;
            return (
              <Col xs="6" md="4" lg="3" key={i}>
                <VideoThumbnail
                  id={id}
                  thumbnailSrc={thumbnails.medium.url}
                  title={localized.title}
                  channelId={channelId}
                  channelTitle={channelTitle}
                ></VideoThumbnail>
              </Col>
            );
          })}
      </VideosContainer>
    </Container>
  );

export default HomePresenter;
