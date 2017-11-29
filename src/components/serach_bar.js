import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
  }

	render() {
		return (
      <div className="search-bar">
        <input
          onChange={ event => this.props.termChangeHandler(event.target.value) } 
          placeholder='搜尋'
        />
      </div>
    );
	}
}

export default SearchBar;
