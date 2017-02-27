import React, { Component } from 'react';
import './style/App.css';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB2bM9vTmMeIdgLprrgsxSxDmhsrBN472s';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos:[],
      selectedVideo:null
  };

  this.videoSearch('makeup');
}

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) =>{
      console.log(videos);
      this.setState(
        { videos:videos,
          selectedVideo:videos[0]});
    });

  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChanged={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  };

}

export default App;
