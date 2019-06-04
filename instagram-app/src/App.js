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
      instagramPosts: [],
    };
  }
  
  componentDidMount() {
    const dataWithIds = dummyData.map(postData => {
      postData.id = uuid();
  
      postData.comments.forEach(comment => {
        comment.id = uuid();
      });
      return postData
    });

    this.setState({
      instagramPosts: dataWithIds
    })
  }

  onLikeClicked = (postID) => {
    const newInstagramData = this.state.instagramPosts.map(instagramPost => {
      if(instagramPost.id === postID) {
        instagramPost.likes++;
      }
      return instagramPost;
    })

    this.setState({
      instagramPosts: newInstagramData
    })
  }

  onCommentSubmitted = (postID, author, text) => {
    const newInstagramData = this.state.instagramPosts.map(instagramPost => {
      if(instagramPost.id === postID) {

        instagramPost.comments.push({
          username: author,
          text: text,
          id: uuid()
        });
      }
      return instagramPost;
    })

    this.setState({
      instagramPosts: newInstagramData
    })
  }

  render() {
    console.log(this.state.instagramPosts);
    return (
      <div className="App">
        <SearchBar />
        <div className="InstagramPosts">
          {this.state.instagramPosts.map(instagramPost => {
            return (
              <PostContainer
                key={instagramPost.id}
                instagramPostData={instagramPost}
                instagramPosts={this.state.instagramPosts}
                postID={instagramPost.id}
                onLikeClicked = {this.onLikeClicked}
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
