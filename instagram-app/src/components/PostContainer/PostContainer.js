import React from "react";
import PropTypes from "prop-types";
import Author from "./Author";
import Image from "./Image";
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components";

const StyledPostContainer = styled.div`
  flex-basis: 300px;
  flex-grow: 1
  margin: 0 16px;

  @media only screen and (max-width: 700px) {
    margin: 0;
    flex-basis: 100%;
  }
`;

export default class PostContainer extends React.Component {
  render() {
    return (
      <StyledPostContainer>
        <Author instagramPostData={this.props.instagramPostData} />
        <Image instagramPostData={this.props.instagramPostData} />
        <CommentSection
          loggedInUser={this.props.loggedInUser}
          removeComment={this.props.removeComment}
          instagramPostData={this.props.instagramPostData}
          instagramPosts={this.props.instagramPosts}
          postID={this.props.postID}
          onLikeClicked={this.props.onLikeClicked}
          onCommentSubmitted={this.props.onCommentSubmitted}
        />
      </StyledPostContainer>
    );
  }
}

PostContainer.propTypes = {
  instagramPostData: PropTypes.object.isRequired
};
