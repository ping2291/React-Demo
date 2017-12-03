import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

import VideoList from './video_list';

class Content extends Component {

    getNextPageData(){

    }

    render(){
        let searchCounts = '';
        if(this.props.videos.data && this.props.videos.data.kind.indexOf('search') !== -1){
            searchCounts = <div className='searchCounts'><div>約 {this.props.videos.data.pageInfo.totalResults.toLocaleString()} 項結果</div></div>;
        }

        return (
            <div className='content'>
                {searchCounts} 
                <div className='result'>
                    <VideoList videos={this.props.videos} playHandler={this.props.playVideo} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        videos: state.videos.list
    };
}

export default connect(mapStateToProps, actions)(Content);