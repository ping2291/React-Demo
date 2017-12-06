import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

import VideoList from './video_list';

class Content extends Component {

    getNextPageData({target}){
        if(this.props.videos.data && this.props.videos.data.kind.indexOf('search') !== -1){
            let scrollTop = target.scrollTop;
            let scrollHeight = target.scrollHeight - target.clientHeight
            if(scrollHeight - scrollTop <= 350 && !this.props.isLoading){
                this.props.loading();
                this.props.searchVideo({
                    nextPageToken: this.props.next,
                    term: this.props.term,
                    maxResults: 15
                });
            }
        }
    }

    render(){
        let searchCounts = '';
        let notifyText = '';
        if(this.props.videos.data && this.props.videos.data.kind.indexOf('search') !== -1){
            searchCounts = <div className='searchCounts'><div>約 {this.props.videos.data.pageInfo.totalResults.toLocaleString()} 項結果</div></div>;
            notifyText = <div className='notifyText'>更多搜尋結果<i class="fa fa-angle-double-down" aria-hidden="true"></i></div>;
        }

        let loadingText = '';
        if(this.props.isLoading){
            loadingText = <div className='loadingText'>Loading Videos...</div>;
        }

        return (
            <div className='content' onScroll={this.getNextPageData.bind(this)}>
                {searchCounts} 
                <div className='result'>
                    <VideoList videos={this.props.videos} playHandler={this.props.playVideo} />
                </div>
                {loadingText}
                {notifyText}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        videos: state.videos.list,
        next: state.videos.next,
        isLoading: state.videos.isLoading
    };
}

export default connect(mapStateToProps, actions)(Content);