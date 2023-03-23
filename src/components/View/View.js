import './View.css';
import React from 'react';

const View = ({movies}) => {
    return (
        <section>
            {movies.length > 1 ? <h1>Multiple Movies</h1> : <h1>One Movie</h1>}
        </section>
    )
}

export default View;