import './App.css';
import React, {Component} from 'react';
import Poster from '../Poster/Poster';
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
        <header>
          <h1 className='title'>Rancid Tomatillos</h1>
        </header>
        {!this.state.selectedMovie ? <div className='poster-container'>{this.state.movies.map(movie => <Poster key={movie.id} data={movie} />)}</div> : <h1>One Movie</h1>}
      </main>
    )
  }
}
