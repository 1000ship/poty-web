import React from 'react'
import { youtubeApi } from 'api'
import HomePresenter from './HomePresenter'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        try{
            const {data: {items: videos}} = await youtubeApi.getVideos({
                maxResults: 12,
            })
            this.setState({videos})
        }
        catch(error) {
            this.setState({
                error
            })
        }
        finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const {videos, loading, error} = this.state
        return <HomePresenter 
                    videos={videos}
                    loading={loading}
                    error={error}/>
    }
}