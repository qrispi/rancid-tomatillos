import './App.css';
import React, {Component} from 'react';
import View from '../View/View';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ["test", "test2"]
    }
  }
  render() {
    return (
      <main className="App">
        <View movies={this.state.movies}/>
      </main>
    )
  }
}
