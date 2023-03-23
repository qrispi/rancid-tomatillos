import './Poster.css';
import React from 'react';

const Poster = ({data}) => {
    return (
        <article className='poster'>
            <img className='poster-img' src={data.poster_path} />
        </article>
    )
}

export default Poster;