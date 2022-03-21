import React from 'react';
import s from "../../styles/Movies.module.css"

const Poster = (props) => {
    return (
        <div >
            <div className={s.mov1}>
            <img alt={"Постер фильма " + props.name}
                 src={props.image} />
            {props.name} <br/>
            {props.style}
            </div>
        </div>
    );
};

export default Poster;