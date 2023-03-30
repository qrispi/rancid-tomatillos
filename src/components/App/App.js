import './App.css';
import React, {Component} from 'react';
import Poster from '../Poster/Poster';
import Movie from '../Movie/Movie';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {
        genres: []
      },
      selectedMovieVideos: []
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
  // fetchSingleMovie = (movieId) => {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  //     .then(response => {
  //       if(!response.ok) {
  //         this.setState({singleMovieError: [response.status, movieId]});
  //         setTimeout(() => this.setState({singleMovieError: []}), 4000);
  //       } else {
  //         return response.json();
  //       }
  //     }
  //   ).then(data => {
  //     this.setState({selectedMovie: data.movie});
  //     console.log("THE STATE IS SET")
  //   });
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`)
  //     .then(response => {
  //       if(!response.ok) {
  //         this.setState({videosError: response.status})
  //       } else {
  //         return response.json();
  //       }
  //     }
  //   ).then(data => {
  //     this.setState({selectedMovieVideos: data.videos});
  //   });
  // }
  // clearSelectedMovie = () => {
  //   this.setState({selectedMovie: {}});
  // }
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
        {/* {!this.state.selectedMovie ? <div className='poster-container'>
          {this.state.movies.map(movie => 
            <Poster key={movie.id} data={movie} error={this.state.singleMovieError} fetchSingleMovie={this.fetchSingleMovie}/>)}
            </div> : 
          <Movie data={this.state.selectedMovie} clearSelectedMovie={this.clearSelectedMovie} videos={this.state.selectedMovieVideos}/>} */}
          <Route exact path="/">
            <div className='poster-container'>
              {this.state.movies.map(movie => 
              <Poster key={movie.id} data={movie} error={this.state.singleMovieError} fetchSingleMovie={this.fetchSingleMovie}/>)}
            </div>
          </Route>
          <Route path="/:movieId" render={({match}) => <Movie movieId={parseInt(match.params.movieId)}/>} />
          <footer>
            {this.state.allMoviesError && <h3 className='error-message'>Sorry we are experiencing server issues right now! Please try again later!</h3>}
          </footer>
      </main>
    )
  }
}
