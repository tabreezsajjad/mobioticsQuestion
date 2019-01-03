import React, { Component } from 'react';
import LatestVideos from '../main-content/latestVideos';
import MusicVideos from '../main-content/musicVideos';



class Content extends Component {

    render() {
        return (
            <React.Fragment>
                <LatestVideos />
                <MusicVideos />
            </React.Fragment>
        )
    }
}
export default Content;