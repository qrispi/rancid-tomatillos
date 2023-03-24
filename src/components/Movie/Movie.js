import React from "react";
import './Movie.css';
import Hero from "../Hero/Hero";
import Genre from "../Genre/Genre";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";

const Movie = ({data, clearSelectedMovie}) => {
    return (
        <section className='Movie'>
            <Hero info={data}/>
            <MovieDescription info={data} />
            {data.genres.map(genre => <Genre key={Date.now()} genre={genre}/>)}
            <button onClick={clearSelectedMovie}>Go Back</button>
        </section>
    )
}

export default Movie;