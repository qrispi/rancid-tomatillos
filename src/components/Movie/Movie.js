import React from "react";
import './Movie.css';
import Hero from "../Hero/Hero";
import Tagline from "../Tagline/Tagline";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";

const Movie = ({data, clearSelectedMovie}) => {
    return (
        <section className='Movie'>
            <Hero info={data}/>
            <MovieDescription info={data} />
            {data.genres.map(tagline => <Tagline key={Date.now()} tagline={tagline}/>)}
            <button onClick={clearSelectedMovie}>Go Back</button>
        </section>
    )
}

export default Movie;