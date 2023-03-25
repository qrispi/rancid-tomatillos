import React from "react";
import "./Hero.css";

const Hero = ({info}) => {
    return (
        <div className='Hero' style={{ backgroundImage:`url(${info.backdrop_path})`}}>
            <h2 className='opaque-background'>{info.title}</h2>
            <p className='opaque-background' >Release Year: {info.release_date}</p>
            <p className='opaque-background' >Rating: {info.average_rating}</p>
        </div>
    )
}

export default Hero;