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

    async loadData() {
        const {match:{params:{query}}} = this.props
        try{
            this.setState({
                loading: true,
                error: null
            })
            const {data: {items: videos}} = await videoApi.searchVideos({
                maxResults: 12,
                q: query,
            })
            this.setState({videos})
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
                    error={error}/>
    }
}