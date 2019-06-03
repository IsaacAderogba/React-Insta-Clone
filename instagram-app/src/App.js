import React from "react";
import uuid from "uuid";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      instagramPosts: dummyData,
    };
  }

  onCommentSubmitted = (posterName, author, text) => {
    const newInstagramData = dummyData.forEach(instagramPost => {
      if(instagramPost.username === posterName) {

        instagramPost.comments.push({
          username: author,
          text: text
        });
      }
      return instagramPost;
    })

    this.setState({
      instagramPosts: newInstagramData
    })

  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="InstagramPosts">
          {dummyData.map(instagramPost => {
            let uniqueId = uuid();
            return (
              <PostContainer
                key={uniqueId}
                instagramPostData={instagramPost}
                instagramPosts={this.state.instagramPosts}
                commentAuthor={this.state.commentAuthor}
                commentText={this.state.commentText}
                postID={uniqueId}
                onCommentSubmitted ={this.onCommentSubmitted}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
