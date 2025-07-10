import React, {useEffect, useState} from 'react';
import {fetchPopularMovies, searchMovie} from "../services/api";
import MovieCard from '../components/MovieCard';
import './Home.css';

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
        <div className='wrap'>
        <div className='page'>
            <h1>Популярные фильмы</h1>
            <input
                type='text'
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e)=> setSearchQuery (e.target.value)}
                className='search-input'
                
            />

            {isloading && <p>Загрузка...</p>}

            {!isloading && movies.length === 0 ? (
                <p style={{fontSize: '18px', color: '#666', textAlign: "center"}}>Фильмы не найдены 😔</p>
            ) : (
                <div className='movie-grid'>
                    {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
            )
            }
        </div>
        </div>
    );
}

export default Home;