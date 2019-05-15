import React, { Component } from 'react';
import PhotoTagger from './Containers/PhotoTagger/PhotoTagger';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoTagger/>
      </div>
    );
  }
}

export default App;
