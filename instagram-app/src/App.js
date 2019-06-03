import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends React.Component {
  render() {

    return (
      <div className='App'>
        <SearchBar />
      </div>
    );
  }
}

export default App;