import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './serach_bar';


const Header = ({termChangeHandler}) => {

    return (
        <div className="headerContainer">
            <div className="header">
                <div className='spac' style={{ color: '#b0b0b0', cursor: 'pointer'}}><i className="fa fa-bars" aria-hidden="true"></i></div>
                <div className='spac'>My VideoTube</div>
                <div className='spac searchConainer'>
                    <SearchBar termChangeHandler={termChangeHandler} />
                    <Link to='/search'><button type='button' className='searchBtn'>搜尋</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;