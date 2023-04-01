import './App.css';
import React, {Component} from 'react';
import Poster from '../Poster/Poster';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      noFilteredMovies: false
    }
  }
  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          this.setState({allMoviesError: response.status});
          return false;
        } else {
          return response.json();
        }
      }
    ).then(data => {
      if (data) {
        this.setState({movies: data.movies});
      }
    })
  }
  searchMovies = (input) => {
    console.log(input)
    const filtered = this.state.movies.filter(movie => movie.title.toLowerCase().includes(input.input.toLowerCase()))
    this.setState({filteredMovies: filtered})
    if(!filtered.length) {
      this.setState({noFilteredMovies: true})
    }
  }
  render() {
    const filteredMovies = this.state.filteredMovies.map(movie => 
      <Poster key={movie.id} data={movie} error={this.state.singleMovieError} />)
    const allMovies = this.state.movies.map(movie => 
      <Poster key={movie.id} data={movie} error={this.state.singleMovieError} />)
    return (
      <main className="app">
        <Header search={this.searchMovies}/>
        <Route exact path="/">
          <div className='poster-container'>
            {(filteredMovies.length && filteredMovies) || (this.state.noFilteredMovies && <p className='no-search-msg'>We don't have any movies that match that title. Please search a different title!</p>) || allMovies}
          </div>
        </Route>
        <Route path="/:movieId" render={({match}) => <Movie movieId={parseInt(match.params.movieId)} />} />
        <footer>
          {this.state.allMoviesError && <h3 className='error-message'>Sorry we are experiencing server issues right now! Please try again later!</h3>}
        </footer>
      </main>
    )
  }
}
