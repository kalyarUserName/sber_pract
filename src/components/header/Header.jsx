import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import s from "../../styles/Header.module.css"
import {routes} from "../../router";
import {AuthContext, UserContext} from "../../context";

const Header = () => {
    const loc = useLocation();
    const authCont = useContext(AuthContext);
    const userCont = useContext(UserContext);
    const logout = () => {
        authCont.setIsAuth(false);
        userCont.setUser('Гость');
        localStorage.removeItem('auth');
    }
    const classN = () => {
        let res = [s.link];
        localStorage.getItem('auth') ? (res.push(s.visible)) : res.push(s.hidden);
        return res;
    }

    return (
        <div className="navbar">
            <div className={["navbar__links", s.header].join()}>
                <nav className={s.menu}>
                    {routes.map(route => (
                        <Link key={route.path} to={route.path}>
                            <span className={loc.pathname === route.path ? s.activeLink : s.link}>{route.desc}</span>
                        </Link>
                    ))}
                    <span className={classN().join(' ')} onClick={logout}>Выйти</span>
                </nav>
            </div>
            {/*<input className={s.searcher} type="text"/>*/}
        </div>
    );
};

export default Header;