import React from 'react';
import PropTypes from 'prop-types';
import './MovieDescription.css';
import Genre from '../Genre/Genre';

const MovieDescription = ({info}) => {
    const formatDollarString = num => {
        if (num >= 100000000) {
            return `$${(num/100000000).toFixed(1)} billion`
        }
        if (num >= 1000000) {
            return `$${(num/1000000).toFixed(1)} million`
        }
        return `$${num}`
    }
    return (
        <section className='movieDescription'>
            <div className='movie-info'>
                {info.overview && <p className='overview'>{info.overview}</p>}
                <div className='genre-container'>
                    {info.genres.map(genre => <Genre key={genre} genre={genre}/>)}
                </div>
            </div>
            <aside className='stats'>
                <h3>Stats:</h3>
                <p>Budget: {info.budget ? formatDollarString(info.budget) : '--'}</p>
                <p>Revenue: {info.revenue ? formatDollarString(info.revenue) : '--'}</p>
                <p>Runtime: {info.runtime ? `${info.runtime} min` : '--'}</p>
            </aside>
        </section>
    )
}

export default MovieDescription;

MovieDescription.propTypes = {
    info: PropTypes.shape({
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string),
        budget: PropTypes.number.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired
    })
}

MovieDescription.defaultProps = {
    info: {
        overview: 'Trust me bro, just go and see it!',
        budget: '--',
        revenue: '--',
        runtime: '--'
    }
}