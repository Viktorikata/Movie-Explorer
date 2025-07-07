const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
    try {
        const response = await fetch (
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error ('Ошибка при получении фильмов:', error);
        return [];
    }
};
