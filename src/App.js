import React, { Component } from 'react';
import './App.css';
import { MapWrapper } from './components/MapWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GPS Tracker</h1>
          <MapWrapper />
        </header>
      </div>
    );
  }
}

export default App;
