import './View.css';
import React from 'react';
import Poster from '../Poster/Poster';

const View = ({movies}) => {
    return (
        <section className=''>
            {movies.length > 1 ? <div className='poster-container'>{movies.map(movie => <Poster key={movie.id} data={movie} />)}</div> : <h1>One Movie</h1>}
        </section>
    )
}

export default View;