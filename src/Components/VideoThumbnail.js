import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

const ThumbnailLink = styled(Link)`
    color: unset;
    font-size: 13px;
    &:hover {
        color: unset;
        text-decoration: unset;
    }
`

const Container = styled.div`
    width: 100%;
    margin: 5px 0px;
`

const ThumbnailImage = styled.img`
    width: 100%;
`

const TitleText = styled.div``
const ChannelText = styled.div`
    color: lightgrey;
    font-weight: 300;
    font-size: smaller;
`
const ChannelImage = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100%;
`

export default ( {id, thumbnailSrc, title, channelId, channelTitle} ) => (
<Container>
    <ThumbnailLink to={`/video/${id}`}>
        <ThumbnailImage src={thumbnailSrc}/>
        <Row>
            <Col xs="auto" className="mr-0 pr-0">
                <ChannelImage src="https://yt3.ggpht.com/a/AATXAJxyDrbpIma8RD3qXIIwy8QYtSBpH-vFFfjZ5g=s88-c-k-c0xffffffff-no-rj-mo"/>
            </Col>
            <Col className="ml-0 pl-0">
                <TitleText>{title}</TitleText>
                <ChannelText>{channelTitle}</ChannelText>
            </Col>
        </Row>
        
    </ThumbnailLink>
</Container>
)