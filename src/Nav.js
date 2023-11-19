import React, { useState, useEffect } from 'react'
import './Nav.css';

const Nav = () => {
    const [ isShow, setIsShow ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setIsShow(true);
            } else setIsShow(false);
        });
    }, []);

    return (
        <div className={`nav ${isShow && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt="Netflix Logo" 
            />
            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Account Logo" 
            />
        </div>
    )
}

export default Nav