import './MovieDescription.css';
import Genre from '../Genre/Genre';

const MovieDescription = ({info}) => {
    return (
        <section className='MovieDescription'>
            <div className='Movie-info'>
                {info.tagline && <h3 className='Tagline'>{info.tagline}</h3>}
                {info.overview && <p className='Overview'>{info.overview}</p>}
                <div className='Genre-container'>
                    {info.genres.map(genre => <Genre key={genre} genre={genre}/>)}
                </div>
            </div>
            <aside className='Stats'>
                <h3>Stats:</h3>
                {info.budget ? <p>Budget: ${info.budget}</p> : null}
                {info.revenue ? <p>Revenue: ${info.revenue}</p> : null}
                {info.runtime ? <p>Runtime: {info.runtime} min</p> : null}
            </aside>
        </section>
    )
}

export default MovieDescription;