import React from 'react';
import s from "../../styles/Movies.module.css"

const Poster = (props) => {
    return (
        <div >
            <div className={s.mov1}>
            <img alt={"Постер фильма " + props.name}
                 src={props.image} />
                <h4 className={s.namePoster}>{props.name}</h4>
                <h5 className={s.stylePoster}> {props.style}</h5>
            </div>
        </div>
    );
};

export default Poster;