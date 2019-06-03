import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author'
import Image from './Image';

import './PostContainer.css';

export default class PostContainer extends React.Component {

    render() {
        return (
            <div className='PostContainer'>
                <Author instagramPostData={this.props.instagramPostData}/>
                <Image instagramPostData = {this.props.instagramPostData}/>
            </div>
        );
    }
}

PostContainer.propTypes = {
    instagramPostData: PropTypes.object.isRequired
}