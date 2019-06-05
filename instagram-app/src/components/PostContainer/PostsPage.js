import React from "react";
import uuid from "uuid";
import Fuse from "fuse.js";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import "./PostContainer.css";

let savedData = [];
let options = {
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["username"]
};

class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.retrieveData();
    this.state = {
      instagramPosts: savedData.length > 0 ? savedData : props.dataWithIds,
      searchInput: "",
      filteredPosts: []
    };
  }

  retrieveData = () => {
    if (localStorage.length >= 1) {
      for (let i = 0; i < localStorage.length; i++) {
        if(window.localStorage.getItem('username')) break;
        let retrievedPost = JSON.parse(window.localStorage.getItem(i));
        savedData.push(retrievedPost);
      }
    }
  };

  saveData = () => {
    localStorage.clear();
    let count = 0;

    localStorage.setItem('username', this.props.username);
    this.state.instagramPosts.forEach(post => {
      localStorage.setItem(count, JSON.stringify(post));
      count++;
    });
  };

  onSearchHandler = searchInput => {

    let fuse = new Fuse(this.state.instagramPosts, options);
    let fuzzyList = fuse.search(searchInput.target.value);

    this.setState({
      searchInput: searchInput.target.value,
      filteredPosts: fuzzyList
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
      <div className="PostsPage">
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

export default PostsPage;
