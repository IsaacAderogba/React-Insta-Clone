import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

function App() {
  console.log(dummyData);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
