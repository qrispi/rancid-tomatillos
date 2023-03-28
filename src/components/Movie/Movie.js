import React from "react";
import './Movie.css';
import Hero from "../Hero/Hero";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";

const Movie = ({data, clearSelectedMovie, videos}) => {
    return (
        <section className='Movie'>
            <button className='back-button' onClick={clearSelectedMovie}>Go Back</button>
            <Hero info={data}/>
            <MovieDescription info={data} />
            {videos && <Media videos={videos} />}
        </section>
    )
}

export default Movie;