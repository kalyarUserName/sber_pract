import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/movies">Films</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
};

export default Header;