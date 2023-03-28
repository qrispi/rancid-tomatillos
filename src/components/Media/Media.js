import './Media.css';
import PropTypes from 'prop-types';
import React from 'react';

const Media = ({videos}) => {
    const videoKeys = videos.filter(video => video.type !== 'Trailer').map(video => video.key)
    const trailer = videos.find(video => video.type === "Trailer")

    return (
        <section className='Media'>
            <div >
                {trailer && <iframe className='Main-video' src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>}
            </div>
            <div className='Multiple-videos'>

                {videoKeys[0] && <iframe className='Small-video' src={`https://www.youtube.com/embed/${videoKeys[1]}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>}

                {videoKeys[1] && <iframe className='Small-video' src={`https://www.youtube.com/embed/${videoKeys[2]}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>}
            </div>
        </section>
    )
}

export default Media;