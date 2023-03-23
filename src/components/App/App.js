import './App.css';
import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>TEST</h1>
      </div>
    )
  }
}
