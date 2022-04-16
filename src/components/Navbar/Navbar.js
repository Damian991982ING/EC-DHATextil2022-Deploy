import React from "react";
import Menu from "../svg/bars-solid.svg";
import Close from "../svg/times-solid.svg";
import Cartwidget from "../Cartwidget/Cartwidget";


import "./Navbar.css";


const Nabvar=()=>{
    return(
        <header className="header navbar navbar-expand-lg navbar-light bg-light">
            <div className="menu">
                <img src={Menu} alt="/"/>
            </div>
            <div className="logo">
                <h1><a href="/">DHATextil</a></h1>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                <li>
                    <img src={Close} alt="" width="30"/>
                </li>
            </ul>
            <div>
               <Cartwidget/>
            </div>
               
            
            
            

        </header>

       

    );
};

export default Nabvar;