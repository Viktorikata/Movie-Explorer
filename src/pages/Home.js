import React, {useEffect, useState} from 'react';
import {fetchPopularMovies, searchMovie} from "../services/api";
import MovieCard from '../components/MovieCard';

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isloading, setIsLoading] = useState (false);

    useEffect(() => {
        const loadMovies = async () => {
            setIsLoading(true);
        
            if (searchQuery.trim() === '') {
                const data = await fetchPopularMovies();
                setMovies(data);
            } else {
                const data = await searchMovie(searchQuery);
                setMovies(data);
            }

            setIsLoading(false);
        };

        loadMovies();
    }, [searchQuery]);

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

            {isloading && (
                <p style={{fontSize:"19px", color:'#999'}}>Загрузка...</p>
            )}

            {!isloading && movies.length === 0 ? (
                <p style={{fontSize: '18px', color: '#666'}}>Фильмы не найдены 😔</p>
            ) : (
                <div
                    style={{display:"flex", flexWrap: "wrap", gap: "20px"}}>
                    {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
            )
            }
        </div>
    );
}

export default Home;