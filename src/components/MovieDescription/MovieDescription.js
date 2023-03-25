import './MovieDescription.css';

const MovieDescription = ({info}) => {
    return (
        <div className='MovieDescription'>
            <div>
                {info.tagline && <h3 className='Tagline'>{info.tagline}</h3>}
                {info.overview && <p className='Overview'>{info.overview}</p>}
            </div>
            <div className='Stats'>
                {info.budget && info.revenue && info.runtime ? <h3>Stats:</h3> : <h3>Sorry, no stats</h3>}
                {info.budget && <p>Budget: ${info.budget}</p>}
                {info.revenue && <p>Revenue: ${info.revenue}</p>}
                {info.runtime && <p>Runtime: {info.runtime} minutes</p>}
            </div>
        </div>
    )
}

export default MovieDescription;