import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';


function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('favorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);
    
    return (
        <div style={{padding:"20px"}}>
            <h1>Избранные фильмы</h1>
            {favorites.length === 0 ? (
                <p>Вы ещё не добавили фильмы в избранное 😢</p>
            ) : (
                <div style={{display:'flex', flexWrap:'wrap', gap: "20px"}}>
                    {favorites.map((movie) => (
                        <MovieCard 
                        key={movie.id}
                        movie={movie}
                        isFavorite={true}
                        onToggleFavorite={() => {}}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;