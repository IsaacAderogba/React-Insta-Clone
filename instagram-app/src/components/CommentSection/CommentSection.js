import React from "react";
import uuid from "uuid";
import moment from 'moment';

import PropTypes from "prop-types";
import Comment from "./Comment";
import AddComment from "./AddComment";

import "./CommentSection.css";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddComment: false
    };
  }

  onAddComment = () => {
    let commentStatus = this.state.showAddComment ? false : true;

    this.setState({
      showAddComment: commentStatus
    });
  };

  onClickLike = postID => {
    this.props.onLikeClicked(this.props.postID);
  };

  render() {
    const {
      username,
      likes,
      timestamp,
      comments
    } = this.props.instagramPostData;

    let timePassed = moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();
    console.log(timePassed);

    return (
      <div className="CommentSection">
        <div className="CommentIcons">
          <i onClick={this.onClickLike} className="small material-icons">
            favorite_border
          </i>
          <i onClick={this.onAddComment} className="small material-icons">
            chat_bubble_outline
          </i>
        </div>
        <div className="LikeCount">{likes} likes</div>
        {comments.map(comment => {
          return <Comment 
          key={uuid()} 
          comment={comment} 
          removeComment={this.props.removeComment}
          />;
        })}
        <div className="Timestamp">{timePassed}</div>
        <AddComment
          onAddComment={this.onAddComment}
          showAddComment={this.state.showAddComment}
          instagramPosts={this.props.instagramPosts}
          postID={this.props.postID}
          username={username}
          onCommentSubmitted={this.props.onCommentSubmitted}
        />
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
