import React from "react";
import uuid from "uuid";
import moment from "moment";
import styled from "styled-components";
import PropTypes from "prop-types";
import Comment from "./Comment";
import AddComment from "./AddComment";

const StyledCommentSection = styled.div`
  margin: 4px;
`;

const StyledCommentIcons = styled.div`
  i {
    margin: 4px 16px 8px 0;
    color: lightslategrey;
    cursor: pointer;
  }
`;

const StyledLikeCount = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const StyledTimestamp = styled.div`
  font-size: 14px;
  color: lightslategrey;
`;

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

    let timePassed = moment(timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow();

    return (
      <StyledCommentSection>
        <StyledCommentIcons>
          <i onClick={this.onClickLike} className="small material-icons">
            favorite_border
          </i>
          <i onClick={this.onAddComment} className="small material-icons">
            chat_bubble_outline
          </i>
        </StyledCommentIcons>
        <StyledLikeCount>{likes} likes</StyledLikeCount>
        {comments.map(comment => {
          return (
            <Comment
              key={uuid()}
              comment={comment}
              removeComment={this.props.removeComment}
              loggedInUser={this.props.loggedInUser}
            />
          );
        })}
        <StyledTimestamp>{timePassed}</StyledTimestamp>
        <AddComment
          loggedInUser={this.props.loggedInUser}
          onAddComment={this.onAddComment}
          showAddComment={this.state.showAddComment}
          instagramPosts={this.props.instagramPosts}
          postID={this.props.postID}
          username={username}
          onCommentSubmitted={this.props.onCommentSubmitted}
        />
      </StyledCommentSection>
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
