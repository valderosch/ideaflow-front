import React from "react";
import avatar from "../../assets/avatar3.png";

//User profile component
const User = () => {
    const username = "nikonii";
    const imagepath = "./assets/avatar3.png";

    const userCard = () => {
        console.log('user-card');
        return(
            <div className="card-body">
                <img scr={avatar} className="card-avatar" alt="avatar"/>
                <p className="card-username"><b className="card-tag">@</b>{username}</p>
                <nav className="card-nav">
                    <li>settings</li>
                    <li>subs</li>
                    <li>quit</li>
                </nav>
            </div>
        );
    }

    return(
        <div className="user-block">
            <div className="username-block" onClick={() => userCard}>
                <p className="hash">@</p>
                <p className="name">{username}</p>
            </div>
            <img src={avatar} className="avatar" alt="ava"/>
        </div>
    );
}

export default User;