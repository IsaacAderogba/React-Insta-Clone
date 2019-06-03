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
          instagramPostData={this.props.instagramPostData}
          instagramPosts={this.props.instagramPosts}
          commentAuthor={this.props.commentAuthor}
          commentText={this.props.commentText}
          postID={this.props.postID}
          onCommentSubmitted ={this.props.onCommentSubmitted}

        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  instagramPostData: PropTypes.object.isRequired
};
