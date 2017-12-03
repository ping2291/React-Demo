import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';
import MainPage from './page/mainPage';
import SearchPage from './page/searchPage';
import HotPage from './page/hotPage';

// import 'materialize-css/dist/css/materialize.min.css';
import '../css/App.css';

class App extends Component {
	render(){
		return (
			<div className='contentContainer'>
        <BrowserRouter basename="/React-Demo">
          <div>
            <Header />
            <Menu />
            <Route exact path='/' component={MainPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/hot' component={HotPage} />
          </div>
        </BrowserRouter>
			</div>
		);
	}
}

export default App;
