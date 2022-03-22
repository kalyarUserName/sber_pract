import React, {useContext, useEffect, useState} from 'react';
import s from '../styles/Login.module.css'
import {AuthContext, UserContext} from "../context";
import {users} from "../users";

const Login = () => {
    const UserCont = useContext(UserContext);
    const AuthCont = useContext(AuthContext);
    const [error, setError] = useState(null);
    useEffect(() => {
        setError(null);
    }, [])
    const login = event => {
        event.preventDefault();
        setError(null);
        const {username, password} = event.target.elements;
        let user = users.find(item => (item.username === username.value) && (item.password === password.value));
        if (user?.username) {
            AuthCont.setIsAuth(true);
            UserCont.setUser(user.username);
            localStorage.setItem('auth', 'true');
        } else {
            setError(true)
        }
        console.log(error);
    }
    return (
        <div className={s.loginWrapper}>
            <form onSubmit={login} className={s.loginF}>
                <div>
                    <input className={s.loginForm} type="text" id="username" placeholder="username"
                           onSubmit={event => UserCont.setUser(event.target.value)}/>
                </div>
                <div><input className={s.loginForm} type="password" id="password" placeholder="password"/></div>
                <button style={{marginLeft: 10}}>Login</button>
                {error !== null ?
                    <h6 style={{marginLeft: 10, marginTop: 5}} className={s.incorrect}>Имя пользователя или пароль
                        введены не верно!</h6> : (<div/>)}

            </form>
        </div>
    );
};

export default Login;