import React from "react";
import earth from './earth.png'
import './Navbar.css'


export default function Navbar(){
    return(
        <div>
        <div className="nav">
        <img className="nav-img" src={earth} alt="earth"/>
        <h3 className="nav-text">my travel jurnal</h3>
        </div>
            
        </div>
    )
}