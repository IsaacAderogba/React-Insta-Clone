import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./CommentSection.css";

const StyledComment = styled.div`
  p span {
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    padding: 0;
    margin: 6px 0;
  }

  button {
    border-radius: 30%;
    cursor: pointer;
    outline: none;
    padding: 1px 6px;
    background: white;
    border: 1px solid #5b74de;
    color: #5b74de;
    cursor: pointer;
  }
`;

export default class Comment extends React.Component {
  render() {
    const { username, text, id } = this.props.comment;

    return (
      <StyledComment>
        <p>
          <span>{username}</span> {text}{" "}
          {username === this.props.loggedInUser ? (
            <button onClick={() => this.props.removeComment(id)}> X </button>
          ) : (
            ""
          )}
        </p>
      </StyledComment>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
