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
      searchInput: '',
      filteredPosts: []
    };
  }

  componentDidMount() {
    const dataWithIds = dummyData.map(postData => {
      postData.id = uuid();

      postData.comments.forEach(comment => {
        comment.id = uuid();
      });
      return postData;
    });

    this.setState({
      instagramPosts: dataWithIds
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

  render() {

    let filteredList;
    if(this.state.searchInput) {
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
