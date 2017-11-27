import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Test =  () => <h2>Test Page!</h2>;
const index = () => <h2>Index Page!</h2>;

const App = function(){
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={index} />
          <Route path='/test' component={Test} />
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
