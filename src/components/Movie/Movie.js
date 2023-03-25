import React from "react";
import './Movie.css';
import Hero from "../Hero/Hero";
import Genre from "../Genre/Genre";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";

const Movie = ({data, clearSelectedMovie, videos}) => {
    return (
        <section className='Movie'>
            <Hero info={data}/>
            <MovieDescription info={data} />
            {data.genres.map(genre => <Genre key={genre} genre={genre}/>)}
            <button onClick={clearSelectedMovie}>Go Back</button>
        </section>
    )
}

export default Movie;