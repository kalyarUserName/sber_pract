import React, {useContext} from 'react';
import s from '../styles/Login.module.css'
import {AuthContext, UserContext} from "../context";

const Login = () => {
  //  const [isAuth, setIsAuth] = useContext(AuthContext);
     const user = useContext(UserContext);
    const Auth = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        console.log(Auth.isAuth, user);
        Auth.setIsAuth(true);
        localStorage.setItem('auth','true');
    }
    return (
        <div className={s.loginWrapper}>

            {/*<form onSubmit={login}>*/}
            {/*    <label>*/}
            {/*        Name:*/}
            {/*        <input type="text" placeholder="username"/>*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        Password:*/}
            {/*        <input placeholder="password"*/}
            {/*               type="password"/>*/}
            {/*    </label>*/}
            {/*    <input type="submit" value="Login"/>*/}


            {/*</form>*/}
            <form onSubmit={login}>
                <input type="text" placeholder="username" onSubmit={event => user.setUser(event.target.value)}/>
                <input type="password" placeholder="password"/>
                <button >Login</button>

            </form>
            {/*<button onClick={() => localStorage.setItem('isAuthorized', 'false')}> Logout</button>*/}
        </div>
    );
};

export default Login;