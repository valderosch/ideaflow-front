import React from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

const PostFilter = () => {
    return(
        <div className="upper">
            <ul className="post-filter">
                <li className="crump filter-root">
                    <p className="root-text">
                        #FLOW
                    </p>
                </li>
                <li className="crump filter-subs">
                    FEED
                </li>
                <li className="crump filter-prefs">
                    ALL
                </li>
            </ul>
            <Link to={"/posts/new"} className="btn">
                <p className="btn btn--doar">New</p>
            </Link>
        </div>
    );
}

export default PostFilter;