import React from 'react';

function MovieCard ({movie}) {
    return (
        <div style={{width: "200px"}}>
            <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.tittle}
                style={{width:'100%', borderRadius: '10px'}}
            />
            <h3>{movie.title}</h3>
        </div>
    );
}

export default MovieCard;