import React from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

//Navigation component
const Router = () => {
    return(
        <nav>
            <li><Link to={"/"}>Feed</Link></li>
            <li><Link to={"/posts/new"}>New</Link></li>
            {/* <li><Link to={"/profile"}>Profile</Link></li>
            <li><Link to={"/profile/settings"}>Settings</Link></li> */}
        </nav>
    );
}

export default Router;