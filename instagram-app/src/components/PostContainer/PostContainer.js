import React from "react";
import PropTypes from "prop-types";
import Author from "./Author";
import Image from "./Image";
import CommentSection from "../CommentSection/CommentSection";

import "./PostContainer.css";

export default class PostContainer extends React.Component {
  render() {
    return (
      <div className="PostContainer">
        <Author instagramPostData={this.props.instagramPostData} />
        <Image instagramPostData={this.props.instagramPostData} />
        <CommentSection
          removeComment={this.props.removeComment}
          instagramPostData={this.props.instagramPostData}
          instagramPosts={this.props.instagramPosts}
          postID={this.props.postID}
          onLikeClicked={this.props.onLikeClicked}
          onCommentSubmitted={this.props.onCommentSubmitted}
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  instagramPostData: PropTypes.object.isRequired
};
