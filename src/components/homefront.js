import "./homefront.css";
import React from "react";
import introimg from "../assets/Webpic.jpg"
import { Link } from "react-router-dom";

const Homefront = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={introimg} alt="introimg" />
        </div>
        <div className="content">
            <p>Hello, my name is</p>
            <h1>Aditya Chinnawar <p>And I'm an Web Developer</p></h1>
            
            <div>
            <Link to="/About" className="btn">
                  About Me..
            </Link>
            <p className="navigation" style={{fontSize:"13px"}}>or click on top right corner</p>
        </div>
        </div>
    </div>
  )
}

export default Homefront