import React from 'react'
import { videoApi } from '../../api'
import HomePresenter from './HomePresenter'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            loading: true
        }
    }

    async componentDidMount() {
        try{
            const {data: {items: videos}} = await videoApi.getVideos()
            console.log( videos )
            this.setState({videos})
        }
        catch {

        }
        finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const {videos, loading} = this.state
        return <HomePresenter 
                    videos={videos}
                    loading={loading}/>
    }
}