import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Test = () => <h2>Test Page!</h2>;
const Index = () => <h2>Index Page!</h2>;

const App = function(){
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Index} />
          <Route path='/test' component={Test} />
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
