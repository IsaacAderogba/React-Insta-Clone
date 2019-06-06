import React from "react";
import styled from "styled-components";

const StyledAddComment = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  input {
    padding: 6px 12px;
    font-size: 14px;
    background-color: #fafafa;

    border: 1px solid #d4d4d4;
    margin-bottom: 8px;
    border-radius: 2px;
  }

  button {
    border: none;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px;
    margin-top: 8px;
    color: white;
    cursor: pointer;

    background: #5b74de;
    color: white;
    -webkit-box-shadow: -1px 0px 22px -3px rgba(91, 116, 222, 0.58);
    -moz-box-shadow: -1px 0px 22px -3px rgba(91, 116, 222, 0.58);
    box-shadow: -1px 0px 22px -3px rgba(91, 116, 222, 0.58);
  }

  p {
    font-size: 14px;
    margin: 0;
    padding-top: 8px;
    color: #24292e;
  }
`;

const StyledInactiveComment = styled.div`
  margin-top: 16px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;

  i {
    font-size: 32px;
    color: #24292e;
    padding-top: 6px;
  }

  @media only screen and (max-width: 700px) {
    i {
      font-size: 40px;
    }
  }
`;

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

    this.props.onAddComment();

    this.setState({
      // commentAuthor: "",
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
        <StyledAddComment onSubmit={this.onSubmitComment} >
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
        </StyledAddComment>
      );
    } else {
      return (
        <StyledInactiveComment>
          <p onClick={this.props.onAddComment}>Add a comment...</p>
          <i onClick={this.props.onAddComment} className="large material-icons">
            more_horiz
          </i>
        </StyledInactiveComment>
      );
    }
  }
}
