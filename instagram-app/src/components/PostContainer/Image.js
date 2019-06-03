import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

export default class Image extends React.Component {

    render() {
        const {imageUrl} = this.props.instagramPostData;


        return (
            <div className = 'Image'>
                <img src={imageUrl} alt='item posted by author' />
            </div>
        );
    }
}