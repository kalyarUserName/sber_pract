import React from 'react';
import s from "../../styles/Movies.module.css"

const Poster = (props) => {
    return (
        <div>
            <div className={s.mov1}>
                <img alt={"Постер фильма " + props.name}
                     src={props.image}/>
                <h5 className={s.namePoster}>{props.name}</h5>
                <h5 className={s.stylePoster}> {props.year}</h5>
            </div>
        </div>
    );
};

export default Poster;