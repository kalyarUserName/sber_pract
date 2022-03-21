import React from 'react';

const AppRouter = () => {
    return ( <div> </div>
        // <Routes>
        //     {routes.map(route => {
        //         return <Route path={route.path} exact={route.exact} element={route.component(route.props)}/>
        //     })}
        // </Routes>
        // {isAuth ?
        //         <Routes style={{width: 100}}>
        //             <Route path="/" element={<Home/>}></Route>
        //             <Route path="movies" element={<Movies data={movies}/>}></Route>
        //             <Route path="profile"
        //                    element={<Profile/>}></Route>
        //             <Route path="login" element={<Profile />}></Route>
        //         </Routes>
        //         :
        //         <Routes style={{width: 100}}>
        //             <Route exact path="/" element={<Home/>}></Route>
        //             <Route path="movies" element={<Movies data={movies}/>}></Route>
        //             <Route path="login" element={<Login/>}></Route>
        //             <Route path="profile" element={<Navigate replace to={"/login"} />}></Route>
        //         </Routes>
        // }

    );
};

export default AppRouter;