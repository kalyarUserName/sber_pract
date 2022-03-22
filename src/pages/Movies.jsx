import React, {useState} from 'react';
import Poster from "../components/movies/Poster";
import s from "../styles/Movies.module.css";

const Movies = (props) => {

    // const [selectedSort, setSelectedSort] = useState('');

    const sortMovies = (sort) => {
        // setSelectedSort(sort);
        // console.log(selectedSort, sort);
        props.setM([...props.data].sort((a, b) => a[sort].localeCompare(b[sort])));
    }
    return (
        <div>
            <select className={s.sortMovies}
                    onChange={event => sortMovies(event.target.value)}>
                <option disabled value="">Сортировка</option>
                <option value="name"> По названию</option>
                <option value="style"> По жанру</option>
            </select>
            <div className={s.movie}>
                {props.data.map(movie => (
                    <Poster key={movie.id} name={movie.name} style={movie.style} image={movie.image}/>
                ))}
            </div>
        </div>);
};

export default Movies;