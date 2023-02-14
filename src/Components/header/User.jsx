import React, { useState } from "react";
import avatar from "../../assets/avatar3.png";
import set from "../../assets/user-dropdown/settings.png";
import sub from "../../assets/user-dropdown/sub.png";
import qui from "../../assets/user-dropdown/quit.png";

//User profile component
const User = () => {
    const username = "nikonii";
    const [open, setOpen] = useState(false);

    const UserCard = () => {
        
        console.log('user-card');
        return(
            <div className={`card-body ${open ? 'active' : 'inactive'}`}>
                <nav className="card-nav">
                    <li>
                        <img src={set}/>
                        settings
                    </li>
                    <li>
                        <img src={sub}/>
                        subs
                    </li>
                    <li>
                        <img src={qui}/>
                        quit
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