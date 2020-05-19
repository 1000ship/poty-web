import React from 'react'
import styled from 'styled-components'
import VideoThumbnail from 'Components/VideoThumbnail'
import { Container, Row, Col } from 'reactstrap'


const VideosContainer = styled(Row)`
`

const HomePresenter = ({videos, loading}) => loading ? (<h1>Loading</h1>) : (
    <Container>
        <VideosContainer>
        {videos && videos.length > 0 && videos.map( (video, i) => {
                const {id, snippet:{thumbnails, localized, channelId, channelTitle}} = video
                return <Col xs="6" md="4" lg="3">
                    <VideoThumbnail
                        key={i}
                        id={id}
                        thumbnailSrc={thumbnails.medium.url}
                        title={localized.title}
                        channelId={channelId}
                        channelTitle={channelTitle}
                    ></VideoThumbnail>
                </Col>
                }
            )
        }
        </VideosContainer>
    </Container>
)

export default HomePresenter