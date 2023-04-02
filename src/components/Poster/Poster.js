import './Poster.css';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Poster = ({data, error, clearSearch}) => {
    return (
        <NavLink className='nav' key={data.id} to={`/${data.id}`} onClick={clearSearch}>
                <img className='poster-img' src={data.poster_path} loading="lazy" alt={`Movie Poster of ${data.title}`}/>
                {error && error[1] === data.id && <p className='poster-error'>Sorry we can't find any details for this movie right now!</p>}
        </NavLink>
    )
}

export default Poster;

Poster.propTypes = {
    data: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }),
    error: PropTypes.array
}

Poster.defaultProps = {
    data: {
        poster_path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfptVpQVR23mAxQ-SKqqRusGUaaiI98whu9w&usqp=CAU'
    }
}