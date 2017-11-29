import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Content from '../Content';

const API_KEY = 'AIzaSyAh9A_vp5iW5uGoA8e24R-9L9vRb3ULe0M';


class HotPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: []
        }
        this.videoSearch();
    }

    videoSearch(){
        let params = {
            key: API_KEY, 
            maxResults: 15,
            regionCode: 'TW'
        };

        YTSearch(params, (videos) => {
            console.log(videos);
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

export default HotPage;