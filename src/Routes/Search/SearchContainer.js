import React from 'react'
import { videoApi } from 'api'
import SearchPresenter from './SearchPresenter'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            query: "",
            loading: true,
            error: null,
        }
    }

    async loadData(isNextPage) {
        const {match:{params:{query}}} = this.props
        try{
            this.setState({
                loading: true,
                error: null
            })
            const {data: {nextPageToken, items: loadedVideos}} = await videoApi.searchVideos({
                maxResults: 12,
                q: query,
                pageToken: (isNextPage ? this.state.nextPageToken : null)
            })
            if(isNextPage && this.state.videos)
                this.setState({videos: [...this.state.videos, ...loadedVideos], nextPageToken })
            else
                this.setState({videos: loadedVideos, nextPageToken})
        }
        catch(error) {
            this.setState({error})
        }
        finally {
            this.setState({
                loading: false,
                query
            })
        }
    }

    async componentDidMount() {
        await this.loadData()
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.match.params.query !== this.props.match.params.query){
            await this.loadData()
        }
    }     

    render() {
        const {query, videos, loading, error} = this.state
        return <SearchPresenter 
                    query={query}
                    videos={videos}
                    loading={loading}
                    error={error}
                    loadVideo={this.loadData.bind(this)}/>
    }
}