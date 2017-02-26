import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
