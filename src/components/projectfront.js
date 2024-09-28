import React from 'react'
import "../components/projectfront.css"
import clock from "../assets/digitalclock.jpg"
import calculator from "../assets/calculator.jpg"
import ecommerce from "../assets/ecommerce.png"
import portfolio from "../assets/portfolio.png"
import chatwebsite from "../assets/chatwebsite.png"
import car from "../assets/car.jpg"
const Projectfront = () => {
  return (
    <div>
        <div className='da'></div>
        <div className="heading">
        <h1 style={{marginBottom:"10px", textDecoration:"underline", textDecorationColor:"lightblue",fontSize:"40px"}}>My Projects</h1>
        <p style={{fontSize:"1.25rem"}}>Here are some of my Recent Projects</p>
        </div>
        <div className='projectcard'>
              <div className='card'>
              <img className="img" src={clock} alt="clockimg" style={{margin:"1rem"}}/>
              <h2>Digital Clock</h2>
              <p>Crafted a dynamic digital clock using HTML, CSS, and JavaScript, seamlessly blending design and functionality for an engaging user experience</p>
              </div>
              <div className='card'>
              <img className="img" src={calculator} alt="calciimg" style={{margin:"1rem"}}/>
              <h2>Calculator</h2>
              <p>Developed a versatile calculator with basic arithmetic operations using HTML, CSS, and JavaScript, ensuring a streamlined and efficient tool for mathematical computations</p>
              </div>
              <div className='card'>
              <img className="img" src={ecommerce} alt="ecommerceimg" style={{margin:"1rem"}}/>
              <h2>Ecommerce Website</h2>
              <p>Crafted a sleek Nike e-commerce site with HTML, CSS, and JavaScript, offering a seamless and visually engaging shopping experience</p>
              </div>
              <div className='card'>
              <img className="img" src={portfolio} alt="portfolioimg" style={{margin:"1rem"}}/>
              <h2>Portfolio Website</h2>
              <p>Developed a stylish personal portfolio website with React, highlighting skills and projects in a user-friendly design</p>
              </div>
              <div className='card'>
              <img className="img" src={car} alt="carimg" style={{margin:"1rem"}}/>
              <h2>Parallel Parking Car</h2>
              <p>Engineered an innovative parallel parking car project, showcasing precision and automation in parking maneuvers</p>
              </div>
              <div className='card'>
              <img className="img" src={chatwebsite} alt="chatimg" style={{margin:"1rem"}}/>
              <h2>Chat Website</h2>
              <p>Empower multiple users to engage in real-time conversations through my dynamic chat platform. Foster seamless communication and collaboration with ease on my website.</p>
              </div>
        </div>    
        <div className='heading'>
        <h1 style={{marginBottom:"10px", textDecoration:"underline", textDecorationColor:"lightblue",fontSize:"40px"}}>My Achievements</h1>
          <p style={{fontSize:"1.25rem",margin:"2rem"}}>1. Research paper on "Mobile Charging Using Piezoelectric Sensor" presented in NCIET Conference at
          AISSMS College Pune, India, and published on the UGC recognised Journal</p>
        </div> 
    </div>
  )
}

export default Projectfront