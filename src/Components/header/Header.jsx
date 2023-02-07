import React from "react";
import "../../styles/Header/Header.scss";
import SearchBar from "./Searchbar";
import {useState} from 'react';
import User from "./User";

//Header Component
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1 className="idea_h1"><b className="idea_b">IDEA</b>Flow</h1>
            </div>
            <SearchBar/>
            <User/>
        </div>
    );
}

export default Header;