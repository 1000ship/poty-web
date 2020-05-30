import React from 'react'
import styled from 'styled-components'
import VideoThumbnail from 'Components/VideoThumbnail'
import { Container, Row, Col } from 'reactstrap'
import { HeaderSpacer } from 'GlobalStyles'
import Loading from 'Components/Loading'

const SearchTermDisplay = styled.div`
    padding-top: 20px;
`

const HomePresenter = ({query, videos, loading}) => loading ? (<Loading/>) : (
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
        {videos && videos.length > 0 && videos.map( (video, i) => {
                const {id:{videoId}, snippet:{thumbnails, title, channelId, channelTitle}} = video
                return <Col xs="6" md="4" lg="3" key={i}>
                    <VideoThumbnail
                        id={videoId}
                        thumbnailSrc={thumbnails.medium.url}
                        title={title}
                        channelId={channelId}
                        channelTitle={channelTitle}
                    ></VideoThumbnail>
                </Col>
                }
            )
        }
        </Row>
    </Container>
)

export default HomePresenter