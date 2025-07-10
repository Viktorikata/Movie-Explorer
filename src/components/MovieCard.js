import React from 'react';
import './MovieCard.css';

function MovieCard ({movie}) {
    return (
        <div className="movie-card" style={{width: "200px"}}>
            <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.tittle}
                style={{width:'100%', borderRadius: '10px'}}
            />
            <div className='movie-card-content'>
            <h3>{movie.title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;