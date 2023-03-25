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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          this.setState({allMoviesError: response.status});
        } else {
          return response.json();
        }
      }
    ).then(data => {
      this.setState({movies: data.movies});
    });
  }
  fetchSingleMovie = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
      .then(response => {
        if(!response.ok) {
          this.setState({singleMovieError: [response.status, movieId]});
          setTimeout(() => this.setState({singleMovieError: []}), 4000);
        } else {
          return response.json();
        }
      }
    ).then(data => {
      this.setState({selectedMovie: data.movie});
    });
  }
  clearSelectedMovie = () => {
    this.setState({selectedMovie: null});
  }
  render() {
    return (
      <main className="App">
        <header>
          <div className='logo-wrapper'>
            <div className='title-wrapper'>
              <img src={require('../../images/tomatillo-wrapped.png')} alt='Picture of Tomatillo' className='tomatillo'/>
              <h1 className='title'>Rancid Tomatillos</h1>
            </div>
            <h2 className='tagline'><i>find your next worst movie...</i></h2>
          </div>
        </header>
        {!this.state.selectedMovie ? <div className='poster-container'>
          {this.state.movies.map(movie => 
          <Poster key={movie.id} data={movie} error={this.state.singleMovieError} fetchSingleMovie={this.fetchSingleMovie}/>)}
          </div> : 
          <Movie data={this.state.selectedMovie} clearSelectedMovie={this.clearSelectedMovie} />}
          <footer>
            {this.state.allMoviesError && <h3 className='error-message'>Sorry we are experiencing server issues right now! Please try again later!</h3>}
          </footer>
      </main>
    )
  }
}
