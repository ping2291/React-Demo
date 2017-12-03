import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {

  keyPressHandler(event){
    if(event.key === 'Enter'){
      this.props.enterHandler();
    }
  }

	render() {
		return (
      <div className="search-bar">
        <input
          onKeyPress={this.keyPressHandler.bind(this)}
          onChange={ event => this.props.queryTerm(event.target.value) } 
          placeholder='搜尋'
        />
      </div>
    );
	}
}

export default connect(null, actions)(SearchBar);
