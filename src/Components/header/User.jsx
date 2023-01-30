import React from "react";

//User profile component
const User = () => {
    const username = "nikonii";
    const imagepath = "/source/ava.png";

    return(
        <div className="userBlock">
            <p className="usename">
                <b className="tag">@</b>{username}
                <img src={imagepath} className="avatar" alt="ava"/>
            </p>
        </div>
    );
}

export default User;