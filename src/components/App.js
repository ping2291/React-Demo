import React, { Component } from 'react';
import _ from 'lodash';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import MainPage from './page/mainPage';
import SearchPage from './page/searchPage';
import HotPage from './page/hotPage';

// import 'materialize-css/dist/css/materialize.min.css';
import '../css/App.css';

const API_KEY = 'AIzaSyAh9A_vp5iW5uGoA8e24R-9L9vRb3ULe0M';

class App extends Component {
	constructor(props){
    super(props);
    
    this.state = {
      term: ''
    }
	}


  termChangeHandler(queryTerm){
    this.setState({
      term: queryTerm
    });
  }

	// videoSearch(term){
  //   let params = {
  //     key: API_KEY, 
  //     maxResults: 15
  //   };


  //   if(term){
  //     params.term = term;
  //     params.action = 'search';
  //   }

	// 	YTSearch(params, (videos) => {
	// 		this.setState({
	// 			videos: videos,
	// 			selectedVideo: videos[0]
	// 		});
	// 	});
	// }

	render(){
		// const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
		return (
			<div className='contentContainer'>
        <BrowserRouter basename="/Demo">
          <div>
            <Header termChangeHandler={this.termChangeHandler.bind(this)} />
            <Menu />
            <Route exact path='/' component={MainPage} />
            <Route path='/search' render={
              props => <SearchPage {...props} term={this.state.term} />
            } />
            <Route exact path='/hot' component={HotPage} />
          </div>
        </BrowserRouter>
			</div>
		);
	}
}

export default App;
