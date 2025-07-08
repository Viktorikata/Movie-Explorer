import React, {useEffect, useState} from 'react';
import {fetchPopularMovies} from "../services/api";
import MovieCard from '../components/MovieCard';

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchPopularMovies();
            setMovies(data);
        };

        loadMovies();
    }, []);

    return (
        <div style={{padding: "20px"}}>
            <h1>Популярные фильмы</h1>
            <input
                type='text'
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e)=> setSearchQuery (e.target.value)}
                style={{
                    padding: '10px',
                    marginBottom: '20px',
                    width: '300px',
                    fontSize: '16px'
                }}
            />
            <div 
                style={{display:"flex", flexWrap: "wrap", gap: "20px"}}>
                {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        </div>
    );
}

export default Home;