import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author'

import './PostContainer.css';

export default class PostContainer extends React.Component {

    render() {
        console.log(this.props.instagramPostData);
        return (
            <div className='PostContainer'>
                <Author />
            </div>
        );
    }
}

PostContainer.propTypes = {
    instagramPostData: PropTypes.object.isRequired
}
