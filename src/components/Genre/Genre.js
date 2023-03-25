import React from "react";
import "./Genre.css"

const Genre = (props) => {
    return (
        <p className='Genre'>{props.genre}</p>
    )
}

export default Genre;