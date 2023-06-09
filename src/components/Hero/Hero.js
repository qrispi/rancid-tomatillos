import React from "react";
import PropTypes from 'prop-types';
import "./Hero.css";

const Hero = ({info}) => {
    return (
        <div className='hero' style={{ backgroundImage:`url(${info.backdrop_path})`}}>
            <h2 className='opaque-background'>{info.title}</h2>
            <p className='opaque-background' >Release Year: {info.release_date}</p>
            <p className='opaque-background' >Rating: {`${info.average_rating/2}/5`}</p>
            <h3 className='movie-tagline opaque-background'>{info.tagline ? info.tagline : 'The world\'s best tagline'}</h3>
        </div>
    )
}

export default Hero;

Hero.propTypes = {
    info: PropTypes.shape({
        backdrop_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        average_rating: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired
    })
}

Hero.defaultProps = {
    info: {
        backdrop_path: 'https://npr.brightspotcdn.com/dims4/default/1b16582/2147483647/strip/true/crop/980x551+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fuploads%2F2021%2F6%2F28%2FEmpty%20theater%20shutterstock_Fer%20Gregory.jpg',
        tagline: 'The world\'s best tagline'
    }
}