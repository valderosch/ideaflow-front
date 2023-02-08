import React from "react";
import avatar from "../../assets/avatar3.png";

//User profile component
const User = () => {
    const username = "nikonii";
    const imagepath = "./assets/avatar3.png";

    return(
        <div className="user-block">
            <div className="username-block">
                <p className="hash">@</p>
                <p className="name">{username}</p>
            </div>
            <img src={avatar} className="avatar" alt="ava"/>
        </div>
    );
}

export default User;