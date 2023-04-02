import './App.css';
import React, {Component} from 'react';
import Poster from '../Poster/Poster';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import fetchData from '../../api-calls';

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
   fetchData('movies').then(data => {
      this.setState({movies: data.movies});
    }).catch(error => {
      this.setState({allMoviesError: error});
    })
  }
  mapPosters = (movies) => {
    return movies.map(movie => 
      <Poster key={movie.id} data={movie} clearSearch={this.clearFilteredMovies}/>);
  }
  searchMovies = (input) => {
    const filtered = this.state.movies.filter(movie => movie.title.toLowerCase().includes(input.input.toLowerCase()));
    this.setState({filteredMovies: filtered});
    if(!filtered.length) {
      this.setState({noFilteredMovies: true});
    }
  }
  clearFilteredMovies = () => {
    this.setState({filteredMovies: [], noFilteredMovies: false});
  }
  render() {
    const filteredMovies = this.mapPosters(this.state.filteredMovies);
    const allMovies = this.mapPosters(this.state.movies);
    return (
      <main className="app">
        <Header search={this.searchMovies}/>
        <Route exact path="/">
          <div className='poster-container'>
            {(filteredMovies.length && filteredMovies) || (this.state.noFilteredMovies && <p className='no-search-msg'>We don't have any movies that match that title. Please search a different title!</p>) || allMovies}
          </div>
        </Route>
        <Route path="/:movieId" render={({match}) => <Movie movieId={parseInt(match.params.movieId)} /> } />
        <footer>
          {this.state.allMoviesError && <p className='error-message'>Sorry we are experiencing server issues right now! Please try again later!</p>}
        </footer>
      </main>
    )
  }
}
