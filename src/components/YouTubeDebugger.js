import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleChangeB = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12}
    })
  }

  handleChangeR = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'}
        },
      });
  }

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.handleChangeB}
        >
          Change bitrate
        </button>
        <button
          className="resolution"
          onClick={this.handleChangeR}
        >
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
