import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
`

const ThumbnailImage = styled.img`
    width: 100%;
`

export default ( {id, thumbnailSrc, title, channelId, channelTitle} ) => (
<Container>
    <Link to={`/video/${id}`}>
        <ThumbnailImage src={thumbnailSrc}/>
        <div>{title}</div>
        <div>{channelTitle}</div>
    </Link>
</Container>
)