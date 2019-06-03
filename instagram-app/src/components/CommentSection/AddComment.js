import React from "react";
import "./CommentSection.css";

export default class AddComment extends React.Component {
  constructor() {
    super();

    this.state = {
      commentAuthor: "",
      commentText: "",
      showAddComment: false
    };
  }


  onSubmitComment = (event) => {
    event.preventDefault();

    this.props.onCommentSubmitted(
      this.props.username,
      this.state.commentAuthor,
      this.state.commentText
    );
  };

  authorInputHandler = input => {
    this.setState({
      commentAuthor: input.target.value
    });
  };

  textInputHandler = input => {
    this.setState({
      commentText: input.target.value
    });
  };

  onAddComment = () => {
    this.setState({
        showAddComment: true
    })
  }

  render() {

    if(this.state.showAddComment){
        return (
          <div className="AddComment">
            <input
              onChange={this.authorInputHandler}
              value={this.state.commentAuthor}
              placeholder="Your name"
            />
            <input
              onChange={this.textInputHandler}
              value={this.state.commentText}
              placeholder="Add a comment"
            />
            <button onClick={this.onSubmitComment}>Submit Comment</button>
          </div>
        );
    } else {
        return (
            <div className='AddComment'>
                <p onClick={this.onAddComment}>Add a comment...</p>
            </div>
        )
    }
  }
}
