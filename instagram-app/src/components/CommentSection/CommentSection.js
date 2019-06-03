import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';


export default class CommentSection extends React.Component {

    render() {
        const {likes, timestamp, comments} = this.props.instagramPostData;


        return (
            <div className='CommentSection'>
                hi
            </div>
        );
    }
}