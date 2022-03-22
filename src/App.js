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
    const [movies, setMovies] = useState([
        {
            id: 0,
            name: 'Худший человек на свете',
            style: 'драма',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/7220dad1-15d7-4108-91db-863294831771/300x'
        },
        {
            id: 1,
            name: 'Убить босса',
            style: 'комедия',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/94de65f6-2a35-4cd6-9b90-514f51688b08/300x450'
        },
        {
            id: 2,
            name: 'Гарри Хафт: Последний бой',
            style: 'драма, биография',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/85f07656-eea5-46d7-a662-d634bddcc2bb/300x450'
        },
        {
            id: 3,
            name: 'Первый отдел',
            style: 'детектив',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7586f8ec-f876-4713-8657-6114f7f37ef8/300x450'
        },
        {
            id: 4,
            name: 'фильм 1',
            style: 'комедия',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7586f8ec-f876-4713-8657-6114f7f37ef8/300x450'
        },
        {
            id: 5,
            name: 'фильм 2',
            style: 'ужасы',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7586f8ec-f876-4713-8657-6114f7f37ef8/300x450'
        },
        {
            id: 6,
            name: 'фильм 3',
            style: 'комедия',
            image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7586f8ec-f876-4713-8657-6114f7f37ef8/300x450'
        }]);
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
                                <Route path="movies" element={<Movies data={movies}/>}/>
                                <Route path="profile"
                                       element={<Profile/>}/>
                                <Route path="login" element={<Navigate replace to={"/profile"}/>}/>
                                <Route path="error" element={<Error/>}/>
                            </Routes>
                            :
                            <Routes style={{width: 100}}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="movies" element={<Movies setM={setMovies} data={movies}/>}/>
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
