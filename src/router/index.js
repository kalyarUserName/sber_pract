import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Movies from "../pages/Movies";

export const routes = [
    {path: '/', component: <Home />, exact: true, desc: 'Главная'},
    {path: '/profile', component: <Profile />, exact: false, desc: 'Профиль'},
    {path: '/movies', component: <Movies />, exact: false, desc: 'Фильмы'}

]