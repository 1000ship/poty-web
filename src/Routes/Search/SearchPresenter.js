import React from 'react'
import styled from 'styled-components'
import VideoThumbnail from 'Components/VideoThumbnail'
import { Container, Row, Col } from 'reactstrap'
import { HeaderSpacer } from 'GlobalStyles'


const VideosContainer = styled(Row)`
`

const HomePresenter = ({videos, loading}) => loading ? (<h1>Loading</h1>) : (
    <Container>
        <HeaderSpacer></HeaderSpacer>
        <VideosContainer>
        {videos && videos.length > 0 && videos.map( (video, i) => {
                const {id, snippet:{thumbnails, title, channelId, channelTitle}} = video
                return <Col xs="6" md="4" lg="3" key={i}>
                    <VideoThumbnail
                        id={id}
                        thumbnailSrc={thumbnails.medium.url}
                        title={title}
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