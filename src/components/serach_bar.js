import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {

	render() {
		return (
      <div className="search-bar">
        <input
          onChange={ event => this.props.queryTerm(event.target.value) } 
          placeholder='搜尋'
        />
      </div>
    );
	}
}

export default connect(null, actions)(SearchBar);
