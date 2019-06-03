import React from "react";
import uuid from "uuid";

import PropTypes from "prop-types";
import Comment from "./Comment";

import "./CommentSection.css";

export default class CommentSection extends React.Component {
  render() {
    const { likes, timestamp, comments } = this.props.instagramPostData;

    return (
      <div className="CommentSection">
        <div className="CommentIcons">
          <i className="small material-icons">favorite_border</i>
          <i className="small material-icons">chat_bubble_outline</i>
        </div>
        <div className="LikeCount">{likes} likes</div>
        {comments.map(comment => {
          return <Comment key={uuid()} comment={comment}/>;
        })}
      </div>
    );
  }
}

CommentSection.propTypes = {
  instagramPostData: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};