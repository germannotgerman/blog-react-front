import React from "react";
import {Link} from "react-router-dom";
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link className={"navitem-home"} to="/">Home</Link>
            </li>
            <li>
                <Link className={"navitem-about"}to="/about">About</Link>
            </li>
            <li>
                <Link className={"navitem-articles"}to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar