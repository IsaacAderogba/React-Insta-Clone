import React from "react";
import "./CommentSection.css";

export default class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentAuthor: props.loggedInUser,
      commentText: ""
    };
  }

  onSubmitComment = event => {
    event.preventDefault();

    this.props.onCommentSubmitted(
      this.props.postID,
      this.state.commentAuthor,
      this.state.commentText
    );

    this.setState({
      commentAuthor: "",
      commentText: ""
    });
  };

  authorInputHandler = input => {
    // return nothing - don't let user amend name
  };

  textInputHandler = input => {
    this.setState({
      commentText: input.target.value
    });
  };

  render() {
    if (this.props.showAddComment) {
      return (
        <form onSubmit={this.onSubmitComment} className="AddComment">
          <input
            onChange={this.authorInputHandler}
            value={this.state.commentAuthor}
            placeholder="Your name"
            required
          />
          <input
            onChange={this.textInputHandler}
            value={this.state.commentText}
            placeholder="Add a comment"
            required
          />
          <button>Submit Comment</button>
        </form>
      );
    } else {
      return (
        <div className="AddComment Inactive">
          <p onClick={this.props.onAddComment}>Add a comment...</p>
          <i onClick={this.props.onAddComment} className="large material-icons">
            more_horiz
          </i>
        </div>
      );
    }
  }
}
