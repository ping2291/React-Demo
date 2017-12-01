import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

import VideoList from './video_list';

class Content extends Component {

    render(){
        return (
            <div className='content'>
                <div className='result'>
                    <VideoList videos={this.props.videos} playHandler={this.props.playVideo} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('content state >>> ', state);
    return {
        videos: state.videos.list
    };
}

export default connect(mapStateToProps, actions)(Content);