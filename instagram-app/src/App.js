import React from "react";
import uuid from "uuid";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

let savedData = [];

class App extends React.Component {
  constructor() {
    super();

    this.retrieveData();
    this.state = {
      instagramPosts: [],
      searchInput: "",
      filteredPosts: []
    };
  }

  retrieveData = () => {
    if (localStorage.length >= 1) {

      for (let i = 0; i < localStorage.length; i++) {
        let retrievedPost = JSON.parse(window.localStorage.getItem(i));
        savedData.push(retrievedPost);
      }
    }
  };

  saveData = () => {
    localStorage.clear();
    let count = 0;

    this.state.instagramPosts.forEach(post => {
      localStorage.setItem(count, JSON.stringify(post));
      count++;
    });
  };

  componentDidMount() {
    const dataWithIds = dummyData.map(postData => {
      postData.id = uuid();

      postData.comments.forEach(comment => {
        comment.id = uuid();
      });
      return postData;
    });

    this.setState({
      instagramPosts: savedData.length > 0 ? savedData : dataWithIds
    });
  }

  onSearchHandler = searchInput => {
    const newSearchList = this.state.instagramPosts.filter(post => {
      if (post.username.includes(searchInput.target.value)) {
        return post;
      }
      return null;
    });

    this.setState({
      searchInput: searchInput.target.value,
      filteredPosts: newSearchList
    });

    if (searchInput.target.value.length < 1) {
      this.setState({
        filteredPosts: []
      });
    }
  };

  onLikeClicked = postID => {
    const newInstagramData = this.state.instagramPosts.map(post => {
      if (post.id === postID) {
        post.likes++;
      }
      return post;
    });

    this.setState({
      instagramPosts: newInstagramData
    });
  };

  onCommentSubmitted = (postID, author, text) => {
    const newInstagramData = this.state.instagramPosts.map(instagramPost => {
      if (instagramPost.id === postID) {
        instagramPost.comments.push({
          username: author,
          text: text,
          id: uuid()
        });
      }
      return instagramPost;
    });

    this.setState({
      instagramPosts: newInstagramData
    });
  };

  removeComment = id => {
    const newInstagramData = this.state.instagramPosts.map(post => {
      let instagramComments = post.comments.filter(
        comment => comment.id !== id
      );
      post.comments = instagramComments;
      return post;
    });

    this.setState({
      instagramPosts: newInstagramData
    });
  };

  render() {
    this.saveData();

    let filteredList;
    if (this.state.searchInput) {
      filteredList = this.state.filteredPosts;
    } else {
      filteredList = this.state.instagramPosts;
    }

    return (
      <div className="App">
        <SearchBar
          onSearchHandler={this.onSearchHandler}
          searchInput={this.state.searchInput}
          filteredPosts={this.state.filteredPosts}
        />
        <div className="InstagramPosts">
          {filteredList.map(instagramPost => {
            return (
              <PostContainer
                key={instagramPost.id}
                removeComment={this.removeComment}
                instagramPostData={instagramPost}
                instagramPosts={this.state.instagramPosts}
                postID={instagramPost.id}
                onLikeClicked={this.onLikeClicked}
                onCommentSubmitted={this.onCommentSubmitted}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
