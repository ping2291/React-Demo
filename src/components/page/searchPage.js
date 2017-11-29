import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Content from '../Content';

const API_KEY = 'AIzaSyAh9A_vp5iW5uGoA8e24R-9L9vRb3ULe0M';

class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: []
        }
        this.videoSearch();
    }

    componentWillUpdate(nextProps, nextState){
        // 按下查詢按鈕，雖然路徑都是一樣/search，可是location.key的值會改變
        if(this.props.location.key !== nextProps.location.key){
            this.videoSearch();
        }
    }

    videoSearch(){
        let params = {
            action: 'search',
            key: API_KEY, 
            term: this.props.term,
            maxResults: 15
        };

        YTSearch(params, (videos) => {
            this.setState({
                videos: videos
            });
        });
	}

    render(){
        return (
            <Content videos={this.state.videos} />
        );
    }
}

export default SearchPage;