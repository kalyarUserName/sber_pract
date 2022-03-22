import React, {useContext} from 'react';
import {UserContext} from "../context";
import s from "../styles/Profile.module.css";

const Profile = () => {
    const userCont = useContext(UserContext);
    return (
        <div className={s.bodyProfile}>
            <h3> Profile </h3>
            <div>
                <img className={s.avatar} alt="user's avatar"
                     src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png"/>
                <div> Hello, {userCont.user}. Nice to see you!</div>
            </div>
        </div>
    );
};

export default Profile;