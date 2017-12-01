import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../Content';
import * as actions from '../../actions';

class HotPage extends Component {
    constructor(props){
        super(props);

        this.props.fetchVideo({
            maxResults: 15,
            regionCode: 'TW'
        });
    }

    render(){
        return (
            <Content />
        );
    }
}

export default connect(null, actions)(HotPage);