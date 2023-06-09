import React from "react";
import PropTypes from 'prop-types';
import "./Genre.css"

const Genre = (props) => {
    return (
        <p className='genre'>{props.genre}</p>
    )
}

export default Genre;

Genre.propTypes = {
    genre: PropTypes.string.isRequired
}