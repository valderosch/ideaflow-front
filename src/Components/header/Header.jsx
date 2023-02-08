import React from "react";
import "../../styles/Header/Header.scss";
import SearchBar from "./Searchbar";
import {useState} from 'react';
import User from "./User";
import { useNavigate } from "react-router-dom";


//Header Component
const Header = () => {
    const nav = useNavigate();

    const returnHomePage = () => {
        return(
            <div>{nav('/')}</div>
        );
    }

    return(
        <div className="header">
            <div className="logo" onClick={returnHomePage}>
                <h1 className="idea_h1"><b className="idea_b">IDEA</b>Flow</h1>
            </div>
            <SearchBar/>
            <User/>
        </div>
    );
}

export default Header;