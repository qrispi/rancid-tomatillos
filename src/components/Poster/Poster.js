import './Poster.css';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Poster = ({data}) => {
    return (
        <NavLink className='nav' key={data.id} to={`/movie/${data.id}`}>
                <img className='poster-img' src={data.poster_path} loading="lazy" alt={`Movie Poster of ${data.title}`}/>
        </NavLink>
    )
}

export default Poster;

Poster.propTypes = {
    data: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }),
}

Poster.defaultProps = {
    data: {
        poster_path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfptVpQVR23mAxQ-SKqqRusGUaaiI98whu9w&usqp=CAU'
    }
}