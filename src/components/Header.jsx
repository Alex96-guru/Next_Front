import React from 'react';
import { FaGear } from "react-icons/fa6";
import Logo from "../icons/Logo.svg";
import { useEffect, useState } from "react";

export default function Header(props){
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setShow(true);
    }, []);

    return (
        <header className="header">
            <div className='nav'>
                <div className='logo show'>
                    <img src={Logo} alt="Logo"/>
                    <h1>Next</h1>
                </div>
                <h2>Мессенджер test </h2>
                <span className="settings"> <FaGear /></span>
            </div>
        </header>
    )
}
