import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends React.Component {
  render() {

    return (
      <div className='App'>
        <SearchBar />
        <div className='InstagramPosts'>
          {dummyData.map(instagramPost => {
            return (
              <PostContainer key={instagramPost.username} instagramPostData={instagramPost}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
