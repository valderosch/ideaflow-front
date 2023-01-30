import React from "react";
import SearchBar from "./Searchbar";
import {useState} from 'react';
import User from "./User";

//Header Component
const Header = () => {

    
    return(
        <div className="header">
            <div className="logo">
                <h1><b>IDEA</b>flow</h1>
            </div>
            <SearchBar/>
            <User/>
        </div>
    );
}

export default Header;