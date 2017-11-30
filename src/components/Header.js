import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from './serach_bar';

class Header extends Component {

    queryBtnHandler(){
        this.props.searchVideo({
            term: this.props.term,
            maxResults: 15
        });
    }

    render(){
        return (
            <div className="headerContainer">
                <div className="header">
                    <div className='spac' style={{ color: '#b0b0b0', cursor: 'pointer'}}><i className="fa fa-bars" aria-hidden="true"></i></div>
                    <div className='spac'>My VideoTube</div>
                    <div className='spac searchConainer'>
                        <SearchBar />
                        <Link to='/search'><button type='button' className='searchBtn' onClick={this.queryBtnHandler.bind(this)}>搜尋</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        term: state.term
    };
}

export default connect(mapStateToProps, actions)(Header);