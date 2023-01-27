import React from "react";
import SearchBar from "./Searchbar";
import {useState} from 'react';

//Header Component
function Header(){


    return(
        <div className="header">
            <div className="logo">
                <h1><b>IDEA</b>flow</h1>
            </div>
            <SearchBar/>
        </div>
    );
}

export default Header;