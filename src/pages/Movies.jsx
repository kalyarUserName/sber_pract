import React from 'react';
import Poster from "../components/movies/Poster";
import s from "../styles/Movies.module.css";

const getMovies = (movies) => {
    let content = [];
    for (let i = 0; i < movies.length; i++) {
        const item = movies[i];
        content.push(<Poster name={item.name} style={item.style} image={item.image}/>)
    }
    return content
}

const Movies = (props) => {
    return (<div className={s.movie}>
        {getMovies(props.data)}
    </div>);
};

export default Movies;