import React, { useState } from "react";
import avatar from "../../assets/avatar3.png";
import set from "../../assets/user-dropdown/settings.png";
import sub from "../../assets/user-dropdown/sub.png";
import qui from "../../assets/user-dropdown/quit.png";
import { Link } from "react-router-dom";

//User profile component
const User = () => {
    const username = "nikonii";
    const [open, setOpen] = useState(false);

    const UserCard = () => {
        return(
            <div className={`card-body ${open ? 'active' : 'inactive'}`}>
                <div className="card-user-block">
                    <img src={avatar}/>
                    <div className="card-username">
                        <p className="card-hash">@</p>
                        <p className="card-name">{username}</p>
                    </div>
                </div>
                <nav className="card-nav">
                    <li className="link profile">
                        <img src={sub}/>
                        <Link  to={"/"}>proflle</Link>
                    </li>
                    <li className="link settings">
                        <img src={set}/>
                        <Link  to={"/"}>settings</Link>
                    </li>
                    <li className="link quit">
                        <img src={qui}/>
                        <Link  to={"/"}>quit</Link>
                    </li>
                </nav>
            </div>
        );
    }

    return(
        <div className="user-block" onClick={() => UserCard(setOpen(!open))}>
            <div className="username-block">
                <p className="hash">@</p>
                <p className="name">{username}</p>
            </div>
            <img src={avatar} className="avatar" alt="ava"/>
            <UserCard/>
        </div>
    );
}

export default User;