import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import Hero from "../Hero/Hero";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";
import { Route, NavLink } from 'react-router-dom';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            selectedMovie: {},
            selectedMovieVideos: [],
            singleMovieError: [],
            mounted: false
        }
    }
    componentDidMount = () => {
        console.log("MOUNTED")
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
          .then(response => {
            if(!response.ok) {
              this.setState({singleMovieError: [response.status, this.props.movieId]});
              setTimeout(() => this.setState({singleMovieError: []}), 4000);
            } else {
              return response.json();
            }
          }
        ).then(data => {
          this.setState({selectedMovie: data.movie});
          console.log("THE STATE IS SET")
        });
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`)
          .then(response => {
            if(!response.ok) {
              this.setState({videosError: response.status})
            } else {
              return response.json();
            }
          }
        ).then(data => {
          this.setState({selectedMovieVideos: data.videos});
          this.setState({mounted: true})
        });
    }
    unmount = () => {
        console.log("I GOT CLICKED")
        this.setState({mounted: false});
    }
    render() {
        console.log(this.state)
        return (
            <section className='Movie'>
                <NavLink to='/'>
                    <button onClick={this.unmount}>Go Back</button>
                </NavLink>
                {this.state.mounted && <Hero info={this.state.selectedMovie}/>}
                {this.state.mounted && <MovieDescription info={this.state.selectedMovie} />}
                {this.state.mounted && <Media videos={this.state.selectedMovieVideos} />}
            </section>
        )
    }
}

export default Movie;

// Movie.propTypes = {
//     data: PropTypes.object.isRequired,
//     clearSelectedMovie: PropTypes.func.isRequired,
//     videos: PropTypes.arrayOf(PropTypes.object)
// }


// {this.state.selectedMovieVideos && <Hero info={this.state.selectedMovie}/>}
//                 {this.state.selectedMovieVideos && <MovieDescription info={this.state.selectedMovie} />}
//                 {this.state.selectedMovieVideos && <Media videos={this.state.selectedMovieVideos} />}