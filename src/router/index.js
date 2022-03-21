import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Movies from "../pages/Movies";
import Error from "../pages/Error";

export const routes = [
    {path: '/', component: <Home />, exact: true},
    {path: '/profile', component: <Profile />, exact: false},
    {path: '/movies', component: <Movies />, exact: false},
    {path: '/error', component: <Error />, exact: false}

]