import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { musicVideos } from "../../actions";



class MusicVideos extends Component {

    componentDidMount() {
        this.props.getMusicVideos();
    }
    render() {

        const { musicVideos } = this.props;
        return (
            <div className="container">
                <h4 className="mt-3 mb-3"><i className="fas fa-music mr-2"></i>Music Videos</h4>
                <div className="row">
                    {musicVideos && musicVideos.map((data, i) => {
                        return (
                            <div key={i} className="col-sm-4">
                                <div className="card mb-3">
                                    <img className="card-img-top" data-toggle="modal" data-target={"#myModal" + i} src={data.thumbnail}></img>
                                    <div className="modal" id={"myModal" + i}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <video src={data.source} id="video"
                                                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                                                        controls muted autoPlay></video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.channelName}</p>
                                        <p>{data.views} | {data.lastUpdated}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        musicVideos: state.videoBrowseList.musicVideos,
    }
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        getMusicVideos: musicVideos
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(MusicVideos);