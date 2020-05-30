import React from 'react'
import { videoApi } from 'api'
import SearchPresenter from './SearchPresenter'

export default class extends React.Component {
    constructor(props) {
        super(props)
        const {match:{params:{query}}} = props;
        this.state = {
            videos: [],
            query,
            loading: true,
        }
    }

    async componentDidMount() {
        try{
            const {query} = this.state
            const {data: {items: videos}} = await videoApi.searchVideos({
                maxResults: 24,
                q: query,
            })
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
        return <SearchPresenter 
                    videos={videos}
                    loading={loading}/>
    }
}