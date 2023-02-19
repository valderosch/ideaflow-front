import React, { useState } from "react";
import PostCreate from "./PostCreate";

const PostFilter = () => {
    const [visible, setVisible] = useState(false);

    const handleForm = () => {
        setVisible(true)
        return(
            <div className="form-block">
                
            </div>
        )
    }

    return(
        <div className="filter-block">       
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
                <div className="btn" onClick={() => handleForm()}>
                    <p className="btn btn--doar">New</p>
                </div>
            </div>
            {visible ? <PostCreate/> : null}
        </div>
    );
}

export default PostFilter;