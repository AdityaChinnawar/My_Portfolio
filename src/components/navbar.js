import "./navbarstyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import mylogo from "../assets/Mylogo.png"
const Navbar = () => {

    const [click,setClick] = useState(true);
    const handleClick = () => setClick(!click);

    const [color,setColor] = useState(false);
    const changeColor = () =>{
       if(window.scrollY >= 10){
        setColor(true);
       }else{
        setColor(false);
       }
    };
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={"/"}>
        <img className="mylogo" src={mylogo} alt="mylogo"/>
        </Link>
        <ul className={click ? "nav-menu" : "nav-menu active"}>
            <l>
            <Link to={"/"}>Home</Link>
            </l>
            <l>
            <Link to={"/About"}>About</Link>
            </l>
            <l>
            <Link to={"/Skills"}>Skills</Link>
            </l>
            <l>
            <Link to={"/Project"}>Project</Link>
            </l>
            <l>
            <Link to={"/Contact"}>Contact</Link>
            </l>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaBars size={40} color="white"/>
            ) : (
                <FaTimes size={40} color="white"/>
            )}      
        </div>
    </div>
  )
}

export default Navbar