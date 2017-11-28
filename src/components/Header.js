import React, { Component } from 'react';

import SearchBar from './serach_bar';


const Header = () => {
    return (
        <div className="headerContainer">
            <div className="header">
                <div className='spac'>選單</div>
                <div className='spac'>My VideoTube</div>
                <div className='spac searchConainer'>
                    <SearchBar />
                    <button className='searchBtn'>搜尋</button> 
                </div>
            </div>
        </div>
    );
}

export default Header;