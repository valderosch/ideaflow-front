import React from "react";

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
            <button className="new-post"><p className="new-post-p">New IDEA</p></button>
        </div>
    );
}

export default PostFilter;