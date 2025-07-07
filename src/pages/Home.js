import React, {useEffect, useState} from 'react';
import {fetchPopularMovies} from "../services/api";

function Home() {
    const [movies, setMovies] = useState([]);

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
            <div 
                style={{display:"flex", flexWrap: "wrap", gap: "20px"}}>
                {movies.map(movie => (
                <div key={movie.id} style={{width:"200px"}}>
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    style={{width: "100%"}}
                />
                <h3>{movie.title}</h3>
            </div>
            ))}
            </div>
        </div>
    );
}

export default Home;