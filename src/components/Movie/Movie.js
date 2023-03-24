import React from "react";
import './Movie.css';
import Hero from "../Hero/Hero";
import Media from "../Media/Media";
import MovieDescription from "../MovieDescription/MovieDescription";

const Movie = ({data, clearSelectedMovie}) => {
    return (
        <section>
            <Hero info={data}/>
            <button onClick={clearSelectedMovie}>Go Back</button>
        </section>
    )
}

export default Movie;