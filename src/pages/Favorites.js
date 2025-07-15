import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './Favorites.css'


function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('favorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);

    const handleRemove = (movie) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== movie.id)
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
    
    return (
        <div className='container'>
        <div className='wrap'>
        <div className='page'>
            <h1>Избранные фильмы</h1>
            {favorites.length === 0 ? (
                <p>Вы ещё не добавили фильмы в избранное 😢</p>
            ) : (
                <div className='movies-grid'>
                    {favorites.map((movie) => (
                        <MovieCard 
                        key={movie.id}
                        movie={movie}
                        isFavorite={true}
                        onToggleFavorite={() => handleRemove(movie)}
                        />
                    ))}
                </div>
            )}
        </div>
        </div>
        </div>
    );
}

export default Favorites;