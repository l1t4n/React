import React from "react";

const socialMedias = [
    {
    socialmedia: "instagram",
    href: "https://www.instagram.com/",
    img: '#'
    },
    {
    socialmedia: "youtube",
    href: "https://www.youtube.com/",
    img: '#'
    },
    {
    socialmedia: "telegram",
    href: "https://web.telegram.org/k/",
    img: '#'
    },
]

export const Footer = () => {
    return (<footer className="footer">
        <div className="social-media-wrapper">
            {
            socialMedias.map(sm => 
            <a href={sm.href}>
                <img alt="#" src={sm.img}>

                </img>
            </a>)
            }
        </div>
    </footer>)
};