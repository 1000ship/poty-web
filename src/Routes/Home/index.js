import React from 'react'
import { videoApi } from 'api'

console.log("sibal", process.env)
console.log( videoApi.getVideos() )

export default () => (
<h1>>> {process.env.YOUTUBE_VIDEO_KEY}</h1>
)