import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from './serach_bar';
import Model from './model';

class Header extends Component {
    
    queryBtnHandler(){
        this.props.searchVideo({
            term: this.props.term,
            maxResults: 15
        });
        // need react-router-dom withRouter
        this.props.history.push('/search');
    }

    closeModel(){
        this.props.closeModel();
    }

    getNextData(){
        this.props.searchVideo({
            nextPageToken: this.props.next,
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
                        <SearchBar enterHandler={this.queryBtnHandler.bind(this)} />
                        <Link to='/search'><button type='button' className='searchBtn' onClick={this.queryBtnHandler.bind(this)}>搜尋</button></Link>
                    </div>
                    {/* <button onClick={this.getNextData.bind(this)}>Next Page</button> */}
                </div>
                <Model play={this.props.play} closeModel={this.closeModel.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        term: state.term,
        play: state.videos.playVideo,
        next: state.videos.next
    };
}

export default withRouter(connect(mapStateToProps, actions)(Header));