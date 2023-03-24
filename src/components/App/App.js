import './App.css';
import React, {Component} from 'react';
import Poster from '../Poster/Poster';
import Movie from '../Movie/Movie';
import movieData from '../../data/movie-data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }
  componentDidMount = () => {
    this.setState({movies: movieData.movies});
  }
  fetchSingleMovie = (movieId) => {
    this.setState({selectedMovie: movieData.movie});
  }
  clearSelectedMovie = () => {
    this.setState({selectedMovie: null});
  }
  render() {
    return (
      <main className="App">
        <header>
          <h1 className='title'>Rancid Tomatillos</h1>
        </header>
        {!this.state.selectedMovie ? <div className='poster-container'>{this.state.movies.map(movie => <Poster key={movie.id} data={movie} fetchSingleMovie={this.fetchSingleMovie}/>)}</div> : <Movie data={this.state.selectedMovie} clearSelectedMovie={this.clearSelectedMovie} />}
      </main>
    )
  }
}
