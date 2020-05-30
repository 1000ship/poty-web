import React from 'react'
import TheaterPresenter from './TheaterPresenter'
import {highlightApi} from 'api'

export default class extends React.Component {

    state = {
        floatingVideo: false,
        videoId: "",
        highlights: [],
        youtubePlayer: null,
        youtubeOpts: {
            width: "100%",
            height: "100%",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 1,
                // rel: 0,
                // showinfo: 0,
                // playlist: [],
            },
        },
        loading: true,
    }

    constructor ( props ) {
        super(props)
    }

    onScrollEvent(e) {

        if( !this.state ) return;
        if( this.state.floatingVideo == false || window.scrollY > 0 )   
            this.setState({floatingVideo: true})
        else if( this.state.floatingVideo || window.scrollY == 0 )
            this.setState({floatingVideo: false})
    }

    async componentDidMount(props) {
        const {location: {pathname}} = this.props
        const pathArray = pathname.split('/')
        const videoId = pathArray[pathArray.length-1]
        
        try {
            const {data:{lastUpdate, highlights}} = await highlightApi.getHighlights(videoId)
            this.setState({
                highlights, lastUpdate, videoId
            })
            window.addEventListener("scroll", this.onScrollEvent.bind(this));
        }
        catch ( e ) {
            console.log("error in theater container js");
        }
        finally {
            this.setState({
                loading: false
            })
        }
    }

    youtubeReady ( e )
    {
        this.setState( {
            youtubePlayer: e.target
        })
    }

    youtubeSeekTo ( seconds, allowSeekAhead )
    {
        const {youtubePlayer} = this.state;
        if( youtubePlayer )
            youtubePlayer.seekTo( seconds, allowSeekAhead );
    }

    render () {
        const { floatingVideo, videoId, highlights, youtubeOpts, loading } = this.state;
        return <TheaterPresenter 
                            floatingVideo={floatingVideo}
                            videoId={videoId}
                            highlights={highlights}
                            youtubeReady={this.youtubeReady.bind(this)}
                            youtubeSeekTo={this.youtubeSeekTo.bind(this)}
                            youtubeOpts={youtubeOpts}
                            loading={loading}
        />
    }
}