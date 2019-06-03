import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

export default class Comment extends React.Component {

    render() {
        const {username, text} = this.props.comment;

        return(
            <div>
                <p><span>{username}</span> {text}</p>
            </div>
        );
    }
}
