import './Poster.css';
import React from 'react';

const Poster = ({data, fetchSingleMovie}) => {
    return (
        <article className='poster' onClick={() => fetchSingleMovie(data.id)}>
            <img className='poster-img' src={data.poster_path} />
        </article>
    )
}

export default Poster;