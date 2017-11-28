import React, { Component } from 'react';
import _ from 'lodash';
import { BrowserRouter, Route } from 'react-router-dom';
import YTSearch from 'youtube-api-search';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

// import 'materialize-css/dist/css/materialize.min.css';
import '../css/App.css';

const API_KEY = 'AIzaSyAh9A_vp5iW5uGoA8e24R-9L9vRb3ULe0M';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({ key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

		return (
			<div className='contentContainer'>
        <Header />
        <Menu />
        <Content videos={this.state.videos} />
				{/* <SearchBar onSearchTermChange={videoSearch} /> */}
				{/* <VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} /> */}
			</div>
		);
	}
}

export default App;
