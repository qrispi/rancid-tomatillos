import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import Hero from "../Hero/Hero";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";
import fetchData from '../../api-calls';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            selectedMovie: null,
            selectedMovieVideos: [],
            singleMovieError: [],
        }
    }
    // logMovieErrors = (error, id) => {
    //     this.setState({singleMovieError: [error, id]});
    //     // setTimeout(() => this.setState({singleMovieError: []}), 4000);
    //     this.setState({videosError: error});
    //   }
    componentDidMount = () => {
        fetchData(`movis/${this.props.movieId}`).then(data => {
            this.setState({selectedMovie: data.movie});
        }).catch(error => {
            this.setState({singleMovieError: [error, this.props.movieId]});
        })
        fetchData(`movies/${this.props.movieId}/videos`).then(data => {
            this.setState({selectedMovieVideos: data.videos});
        }).catch(error => {
            this.setState({videosError: error});
        })
        // fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
        //   .then(response => {
        //     if(!response.ok) {
        //       this.setState({singleMovieError: [response.status, this.props.movieId]});
        //       setTimeout(() => this.setState({singleMovieError: []}), 4000);
        //     } else {
        //       return response.json();
        //     }
        //   }
        // ).then(data => {
        //   this.setState({selectedMovie: data.movie});
        // });
        // fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`)
        //   .then(response => {
        //     if(!response.ok) {
        //       this.setState({videosError: response.status});
        //     } else {
        //       return response.json();
        //     }
        //   }
        // ).then(data => {
        //   this.setState({selectedMovieVideos: data.videos});
        // });
    }
    render() {
        return (
            <section className='movie'>
                {this.state.singleMovieError && <p className='poster-error'>Sorry, we can't find any details for this movie right now!</p>}
                {this.state.selectedMovie && <Hero info={this.state.selectedMovie}/>}
                {this.state.selectedMovie && <MovieDescription info={this.state.selectedMovie} />}
                {this.state.selectedMovieVideos.length && <Media videos={this.state.selectedMovieVideos} />}
            </section>
        )
    }
}

export default Movie;

Movie.propTypes = {
    movieId: PropTypes.number.isRequired
}