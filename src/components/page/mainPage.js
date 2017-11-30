import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../Content';
import * as actions from '../../actions';

class MainPage extends Component {
    constructor(props){
        super(props);

        this.props.fetchVideo({
            maxResults: 15
        });
    }

    render(){
        return (
            <Content videos={this.props.videos} />
        );
    }
}

function mapStateToProps({videos}){
    return {
        videos
    };
}

export default connect(mapStateToProps, actions)(MainPage);