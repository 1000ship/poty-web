import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export default ( {id, thumbnailSrc, title, channelId, channelTitle} ) => (
<Container>
    <ThumbnailLink to={`/video/${id}`}>
        <ThumbnailImage src={thumbnailSrc}/>
        <div>{title}</div>
        <div>{channelTitle}</div>
    </ThumbnailLink>
</Container>
)