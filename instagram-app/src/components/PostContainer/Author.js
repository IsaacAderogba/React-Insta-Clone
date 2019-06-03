import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';


export default class Author extends React.Component {

    render() {
        const {username, thumbnailUrl} = this.props.instagramPostData;

        return (
            <div className='Author'>
                <div>
                    <img src={thumbnailUrl} alt='author' />
                </div>
                <span>{username}</span>
            </div>
        );
    }
}

Author.propTypes = {
    instagramPostData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    }).isRequired
}