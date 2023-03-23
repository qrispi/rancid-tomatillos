import './App.css';
import React, {Component} from 'react';
import View from '../View/View';
import movieData from '../../data/movie-data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount = () => {
    this.allMovies = movieData.movies;
    this.setState({movies: this.allMovies});
  }
  render() {
    return (
      <main className="App">
        <View movies={this.state.movies}/>
      </main>
    )
  }
}
