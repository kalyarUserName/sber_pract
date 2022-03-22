import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import Header from "./components/header/Header";
import Error from "./pages/Error";
import React, {useEffect, useState} from "react";
import Login from "./pages/Login";
import {AuthContext, UserContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState('Гость');
    useEffect(()=>{
        if(localStorage.getItem('auth'))
            setIsAuth(true);
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <UserContext.Provider value={{
                user,
                setUser
            }}>
                <BrowserRouter style={{maxWidth: 1000}}>
                    <Header/>
                    <div className="main-content">
                        {isAuth ?
                            <Routes style={{width: 100}}>
                                <Route path="/"
                                       element={<Home/>}/>
                                <Route path="movies" element={<Movies/>}/>
                                <Route path="profile"
                                       element={<Profile/>}/>
                                <Route path="login" element={<Navigate replace to={"/profile"}/>}/>
                                <Route path="error" element={<Error/>}/>
                            </Routes>
                            :
                            <Routes style={{width: 100}}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="movies" element={<Movies />}/>
                                <Route path="login" element={<Login/>}/>
                                <Route path="profile" element={<Navigate replace to={"/login"}/>}/>
                                <Route path="error" element={<Error/>}/>
                            </Routes>
                        }
                    </div>
                </BrowserRouter>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
