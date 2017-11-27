import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <div>
                <Link to='/Demo/' className='waves-effect waves-light btn'>Home</Link>
                <Link to='/Demo/test' className='waves-effect waves-light btn'>Test Page</Link>
            </div>
        );
    }
}

export default Header;
