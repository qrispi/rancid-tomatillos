import React from "react";
import './Movie.css';

const Movie = ({data, clearSelectedMovie}) => {
    return (
        <section>
            <h2>{data.title}</h2>
            <button onClick={clearSelectedMovie}>Go Back</button>
        </section>
    )
}

export default Movie;