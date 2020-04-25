import React from 'react'
import HomePresenter from './HomePresenter'

export default class extends React.Component {
    
    constructor ( props ) {
        super(props)
        this.state = {
            youtubeVideoId: "aDZ4zG36oRQ",
            highlights: [{timestamp: "4:13:12", likes: 20}],
            youtubePlayer: null,
            youtubeOpts: {
                width: "100%",
                height: "100%",
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                  enablejsapi: 1,
                  modestbranding: 1,
                //   rel: 0,
                //   showinfo: 0,
                //   playlist: [],
                },
              }
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
        const { youtubeVideoId, highlights, youtubeOpts } = this.state;
        return <HomePresenter highlights={highlights}
                            youtubeVideoId={youtubeVideoId}
                            youtubeReady={this.youtubeReady.bind(this)}
                            youtubeSeekTo={this.youtubeSeekTo.bind(this)}
                            youtubeOpts={youtubeOpts}
        />
    }
}