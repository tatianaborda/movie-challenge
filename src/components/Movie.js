import React from 'react';
import './Movie.css';
import Modali, { useModali } from 'modali';

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const Movie = ({ ...movie }) => {
    const [firstModal, toggleFirstModal] = useModali({large: true});

    let year = new Date(movie.release_date)
    let movieYear = year?.getFullYear()
 return (
        <div className="card">
            <div className="card-header">
                <h4>{movie.original_title}</h4>
                <p className="year">{movieYear ? movieYear : ''}</p>
            </div>
            <button onClick={toggleFirstModal}>
                    + Info
                </button>
                <img src={IMG_URL + movie.poster_path} alt={movie.original_title} /> 
      <Modali.Modal {...firstModal}>
      <div>
            <div className="details-title">
                <h1>{movie.original_title} - {movieYear ? movieYear : ''}</h1>
            </div>     
                <div className="details-container">
                    <div>
                <img src={IMG_URL + movie.poster_path} alt={movie.original_title} /> 
                </div>
                <div className="movie-overview">
                {movie.overview}
                </div>   
        </div>
        </div>
      </Modali.Modal>    
        </div>
 )
}
