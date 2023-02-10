import React from "react";

const PostFilter = () => {
    return(
        <div className="upper">
            <ul className="post-filter">
                <li className="filter-root">
                    <p className="root-text">
                        #FLOW
                    </p>
                </li>
                <li className="filter-subs">
                    FEED
                </li>
                <li className="filter-prefs">
                    ALL
                </li>
            </ul>
            <button className="new-post"><p className="new-post-p">New IDEA</p></button>
        </div>
    );
}

export default PostFilter;