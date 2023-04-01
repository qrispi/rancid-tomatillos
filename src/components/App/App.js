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
      movies: []
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
  render() {
    return (
      <main className="App">
        <header>
          <div className='logo-wrapper'>
            <div className='title-wrapper'>
              <img src={require('../../images/tomatillo-wrapped.png')} alt='Picture of Tomatillo' className='tomatillo'/>
              <h1 className='title'>Rancid Tomatillos</h1>
            </div>
            <p className='tagline'>find your next worst movie...</p>
          </div>
        </header>
        <Route exact path="/">
          <div className='poster-container'>
            {this.state.movies.map(movie => 
            <Poster key={movie.id} data={movie} error={this.state.singleMovieError} />)}
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
