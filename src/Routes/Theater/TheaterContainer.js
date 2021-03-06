import React from "react";
import TheaterPresenter from "./TheaterPresenter";
import { highlightApi } from "api";

export default class extends React.Component {
  state = {
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
    error: null,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount(props) {
    const {
      location: { pathname },
    } = this.props;
    const pathArray = pathname.split("/");
    const videoId = pathArray[pathArray.length - 1];

    try {
      const {
        data: { lastUpdate, highlights },
      } = await highlightApi.getHighlights(videoId);
      this.setState({
        highlights,
        lastUpdate,
        videoId,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  youtubeReady(e) {
    this.setState({
      youtubePlayer: e.target,
    });
  }

  youtubeSeekTo(seconds, allowSeekAhead) {
    const { youtubePlayer } = this.state;
    if (youtubePlayer) youtubePlayer.seekTo(seconds, allowSeekAhead);
  }

  render() {
    const { videoId, highlights, youtubeOpts, loading, error } = this.state;
    return (
      <TheaterPresenter
        videoId={videoId}
        highlights={highlights}
        youtubeReady={this.youtubeReady.bind(this)}
        youtubeSeekTo={this.youtubeSeekTo.bind(this)}
        youtubeOpts={youtubeOpts}
        loading={loading}
        error={error}
      />
    );
  }
}
