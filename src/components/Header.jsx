import React from 'react';
import { FaGear } from "react-icons/fa6";
import Logo from "../icons/Logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <header className="header">
            <div className='nav'>
                <a href="auth/login/Login.html" className={show ? 'logo show' : 'logo'}>
                    <img src={Logo} alt="Logo" />
                    <h1>Next</h1>
                </a>
                <h2>Мессенджер test</h2>
                <span className="settings"><FaGear /></span>
            </div>
        </header>
    );
}
