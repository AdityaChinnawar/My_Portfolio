import React from 'react';
import Skillfront from '../components/skillfront';
import './skillfrontstyle.css';

const Skillfront1 = () => {
  return (
    <div>
        <div className='da'></div>
        <div className="heading">
        <h1 style={{marginBottom:"10px", textDecoration:"underline", textDecorationColor:"lightblue",fontSize:"40px"}}>My Skills</h1>
        <p style={{fontSize:"1.25rem"}}>Here is my skills to represent my Expertise</p>
        </div>
        <div className='skills'>
        <div className='box'><Skillfront percentage={85} text="85%" /><h1>C/C++</h1></div>
        <div className='box'><Skillfront percentage={60} text="60%" /><h1>Java</h1></div>
        <div className='box'><Skillfront percentage={55} text="55%" /><h1>Python</h1></div>
        <div className='box'><Skillfront percentage={90} text="90%" /><h1>HTML</h1></div>
        <div className='box'><Skillfront percentage={85} text="85%" /><h1>CSS</h1></div>
        <div className='box'><Skillfront percentage={75} text="70%" /><h1>Javascript</h1></div>
        <div className='box'><Skillfront percentage={40} text="40%" /><h1>Bootstrap</h1></div>
        <div className='box'><Skillfront percentage={60} text="60%" /><h1>jQuery</h1></div>
        <div className='box'><Skillfront percentage={75} text="75%" /><h1>React js</h1></div>
        <div className='box'><Skillfront percentage={40} text="40%" /><h1>Node js</h1></div>
        <div className='box'><Skillfront percentage={50} text="50%" /><h1>Express js</h1></div>
        <div className='box'><Skillfront percentage={40} text="40%" /><h1>SQL</h1></div>
        <div className='box'><Skillfront percentage={60} text="60%" /><h1>Matlab</h1></div>
        </div>
    </div>
  );
};

export default Skillfront1;
