import React from "react";
import "./Tagline.css"

const Tagline = (props) => {
    return (
        <p className='Tagline'>{props.tagline}</p>
    )
}

export default Tagline;