import React from "react";
import "./CommentSection.css";

export default class AddComment extends React.Component {
  constructor() {
    super();

    this.state = {
      commentAuthor: "",
      commentText: "",
    };
  }


  onSubmitComment = (event) => {
    event.preventDefault();

    this.props.onCommentSubmitted(
      this.props.postID,
      this.state.commentAuthor,
      this.state.commentText
    );

    this.setState({
      commentAuthor: '',
      commentText: ''
    })
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


  render() {

    if(this.props.showAddComment){
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
            <div className='AddComment'>
                <p onClick={this.props.onAddComment}>Add a comment...</p>
            </div>
        )
    }
  }
}
