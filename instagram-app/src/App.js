import React from 'react';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      instagramPosts: dummyData,
      commentAuthor: '',
      commentText: '',
    };
  }

  render() {

    return (
      <div className='App'>
        <SearchBar />
        <div className='InstagramPosts'>
          {dummyData.map(instagramPost => {
            return (
              <PostContainer key={uuid()} instagramPostData={instagramPost}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
