import React from "react";
import avatar from "../../assets/avatar3.png";

//User profile component
const User = () => {
    const username = "nikonii";
    const imagepath = "./assets/avatar3.png";

    return(
        <div className="userBlock">
            <p className="usename">
                <b className="tag">@</b>{username}
                <img src={avatar} className="avatar" alt="ava"/>
            </p>
        </div>
    );
}

export default User;