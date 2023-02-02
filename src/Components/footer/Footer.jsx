import React from "react";
import "../../styles/Footer.scss"

//Footer component
const Footer = () => {
    const footerInformation = "Idea flow app (c).\nDesigned and developed by @valderosch \nIf you have questions - leave your message on valderosh.dev@gmail.com";
    return(
        <div className="footer">
            <h2 className="title">This may be footer, right?</h2>
            <p className="info">{footerInformation}</p>
        </div>
    );
}

export default Footer;