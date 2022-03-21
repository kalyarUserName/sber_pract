import React from 'react';
import {Link, useLocation} from "react-router-dom";
import s from "../../styles/Header.module.css"
import {routes} from "../../router";

const Header = () => {
    return (
        <div className="navbar">
            <div className={["navbar__links", s.header].join()}>
                <nav className={s.menu}>
                    {routes.map(route => (
                        // <div className={s.link}>
                            <Link exact={route.exact} to={route.path}>
                                <span className={s.link}>{route.desc}</span>
                            </Link>
                       // </div>
                    ))}

                </nav>
            </div>
        </div>
    );
};

export default Header;