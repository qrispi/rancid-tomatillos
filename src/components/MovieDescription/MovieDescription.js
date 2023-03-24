import './MovieDescription.css';

const MovieDescription = ({info}) => {
    return (
        <div>
            <div>
                <h3>{info.tagline}</h3>
                <p>{info.overview}</p>
            </div>
            <div>
                <h3>Stats</h3>
                <p>Budget: {info.budget}</p>
                <p>Revenue: {info.revenue}</p>
                <p>Runtime: {info.runtime} minutes</p>
            </div>
        </div>
    )
}

export default MovieDescription;