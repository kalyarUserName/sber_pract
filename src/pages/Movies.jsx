import React, {useEffect, useMemo, useState} from 'react';
import Poster from "../components/movies/Poster";
import s from "../styles/Movies.module.css";
import axios from "axios";

const Movies = (props) => {
    useEffect(() => {
            fetchMovies();
        },
        [])
    const [movies, setMovies] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');

    const sortMovies = (sort) => {
        setSelectedSort(sort);
    }
    const sortMovies1 = useMemo(() => {
        if (selectedSort)
            return ([...movies].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])));
        else return movies
    }, [movies, selectedSort]);

    async function fetchMovies() {
        const responseStarWars = await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=star wars');
        const responseBatman = await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman');
        setMovies([...responseStarWars.data.Search, ...responseBatman.data.Search]);
    }

    return (
        <div>
            <select className={s.sortMovies}
                    onChange={event => sortMovies(event.target.value)}>
                <option disabled value="">Сортировка</option>
                <option value="Title"> По названию</option>
                <option value="Year"> По году</option>
            </select>
            <div className={s.movie}>
                {sortMovies1.map(movie => (
                    <Poster key={movie.imdbID} name={movie.Title} year={movie.Year} image={movie.Poster}/>
                ))}
            </div>
        </div>);
};

export default Movies;