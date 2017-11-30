import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Content from '../Content';

class SearchPage extends Component {

    render(){
        return (
            <Content videos={this.props.videos} />
        );
    }
}

function mapStateToProps(state){
    return {
        videos: state.videos,
        term: state.term
    };
}

export default connect(mapStateToProps, actions)(SearchPage);