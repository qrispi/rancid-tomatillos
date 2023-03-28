import './Poster.css';
import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({data, fetchSingleMovie, error}) => {
    return (
        <article className='poster' onClick={() => fetchSingleMovie(data.id)}>
            <img className='poster-img' src={data.poster_path} />
            {error && error[1] === data.id && <p className='poster-error'>Sorry we can't find any details for this movie right now!</p>}
        </article>
    )
}

export default Poster;

Poster.propTypes = {
    data: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }),
    fetchSingleMovie: PropTypes.func.isRequired,
    error: PropTypes.string
}

Poster.defaultProps = {
    data: {
        poster_path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfptVpQVR23mAxQ-SKqqRusGUaaiI98whu9w&usqp=CAU'
    }
}