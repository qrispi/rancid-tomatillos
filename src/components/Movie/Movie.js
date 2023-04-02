import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import Hero from "../Hero/Hero";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";
import fetchData from '../../api-calls';
import { Redirect } from "react-router-dom";

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            selectedMovie: null,
            selectedMovieVideos: null,
            singleMovieError: null
        }
    }
    componentDidMount = () => {
        fetchData(`movies/${this.props.movieId}`).then(data => {
            this.setState({selectedMovie: data.movie});
        }).catch(error => {
            this.setState({singleMovieError: error});
        })
        fetchData(`movies/${this.props.movieId}/videos`).then(data => {
            this.setState({selectedMovieVideos: data.videos});
        }).catch(error => {
            this.setState({videosError: error});
        })
    }
    render() {
      if (this.state.singleMovieError == 'Error: 404') {
        return <Redirect to='/404'/>
      }
        return (
            <section className='movie'>
                {this.state.singleMovieError && <p className='poster-error'>Sorry, we can't find any details for this movie right now!</p>}
                {this.state.selectedMovie && <Hero info={this.state.selectedMovie} />}
                {this.state.selectedMovie && <MovieDescription info={this.state.selectedMovie} />}
                {this.state.selectedMovieVideos && <Media videos={this.state.selectedMovieVideos} />}
            </section>
        )
    }
}

export default Movie;

Movie.propTypes = {
    movieId: PropTypes.number.isRequired
}