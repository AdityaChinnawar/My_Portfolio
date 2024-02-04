import "./aboutfront.css"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import myimage from "../assets/Adityaphoto.png"
import resume from "../assets/Adityaresume.pdf"
const Aboutfront = () => {
    const [Typeeffect] = useTypewriter({
        words: ['Engineer','Web-Developer','Problem-Solver'],
        loop:{},
        typespeed:100,
        deletespeed:40
    })
    const openResume = () => {  
        window.open(resume, '_blank');
      };
  return (
    <div>
        <div className="dummy"></div>
        <div className="adjust">
       <div className="detail">
       <p>Hello, my name is</p>
        <h1>Aditya Chinnawar</h1>
        <p>And I'm am a <span style={{fontWeight:600}}>{Typeeffect}</span></p>
        <p style={{fontSize:"20px", fontWeight:"150", textAlign:"justify",width:"100%",padding:"5px",paddingBottom:"35px",paddingRight:"0px", paddingLeft:"0px"}}>Hello, I'm Aditya Chinnawar, a driven Web Developer blending a foundation 
           in electronics and telecommunication engineering with a passion for elegant 
           design and coding. With a knack for creative problem-solving, I bring a unique 
           fusion of technical expertise and aesthetic sensibility to web development. 
           Excited about contributing to project success and growing within collaborative, 
           innovative environments. Join me on this journey of continuous learning and impactful 
           web solutions.</p>
           <button className="btn" style={{fontSize:"20px"}} onClick={openResume}>
                  Download Resume
            </button>
       </div>
       <div className="myimg">
       <img className="myimage" src={myimage} alt="myimg"/>
       </div>
       </div>
    </div>
  )
}

export default Aboutfront