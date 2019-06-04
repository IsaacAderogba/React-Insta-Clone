import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

export default class Comment extends React.Component {
  render() {
    const { username, text, id } = this.props.comment;

    return (
      <div className="Comment">
        <p>
          <span>{username}</span> {text}{" "}
          <button onClick={() => this.props.removeComment(id)}> X </button>
        </p>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
