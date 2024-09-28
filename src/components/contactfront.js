import React from 'react'
import "./contactfrontstyale.css"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { IoPersonSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import swal from 'sweetalert';
export const Contactfront = () => {
    
    const emailAddress = 'adityachinnawar82@gmail.com'
    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        swal(`Copied to clipboard: ${text}`);
    };
    const openLinkInNewTab = (url, e) => {
        e.preventDefault();
        window.open(url, '_blank').focus();
    };
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lelbu04', 'template_a1manrs', form.current, '7HV5Ig_2kT8VDY0Lk')
          .then((result) => {
              alert("Message sent");
          }, (error) => {
              alert(error.text);
          }
          );
          e.target.reset()
      };
  return (
     <section>
        <div className='da'></div>
        <div className='heading'>
        <h1 style={{marginBottom:"10px", textDecoration:"underline", textDecorationColor:"lightblue",fontSize:"40px",}}>Contact Me</h1>
        </div>
        <div className='details'>
        <div className='contact'>
        <h1 style={{margin:"2rem"}}>Get in touch</h1> 
        <p style={{fontSize:"20px", textAlign:"justify", width:"90%", paddingBottom:"1rem",padding:"1rem"}}>If you have any questions or would like to discuss a project, feel free to reach out. I'd love to hear from you!</p>  
        <div className='deatailicon'><div><IoPersonSharp size={40} style={{cursor:"pointer"}}/></div>
        <div><p style={{fontSize:"20px",fontWeight:"700", paddingLeft:"30px"}}>Name</p><p style={{fontSize:"20px",paddingLeft:"30px"}}>Aditya Chinnawar</p></div></div>
        <div className='deatailicon'><div><FaPhoneAlt size={40} style={{cursor:"pointer"}} onClick={() => copyToClipboard('+91 8208132592')} /></div>
        <div><p style={{fontSize:"20px",fontWeight:"700", paddingLeft:"30px"}}>Mobile</p><p style={{fontSize:"20px",paddingLeft:"30px"}}>+91 8208132592</p></div></div>
        <div className='deatailicon'><div><IoMdMail size={40} style={{cursor:"pointer"}} onClick={() => window.location.href = `mailto:${emailAddress}`}/></div>
        <div><p style={{fontSize:"20px",fontWeight:"700", paddingLeft:"30px"}}>Email</p><p style={{fontSize:"20px",paddingLeft:"30px"}}>adityachinnawar82@gmail.com</p></div></div>
        <div className='deatailicon'><div><MdLocationOn size={40} style={{cursor:"pointer"}}/></div>
        <div><p style={{fontSize:"20px",fontWeight:"700", paddingLeft:"30px"}}>Address</p><p style={{fontSize:"20px",paddingLeft:"30px"}}>Pune, Maharashtra</p></div></div>
        
        </div>       
        <div className='container'>
            <h1 style={{margin:"2rem"}}>Message me</h1>
            <form ref={form} onSubmit={sendEmail} className='senddetail'>
                <div className='send'><input type='text' placeholder='Name' name='user_name' style={{color:"black"}} required />
                <input type='email' placeholder='Email' name='user_email' style={{color:"black"}} required /></div>
                <div className='send'><input type='text' placeholder='Subject' name='subject' style={{color:"black"}}  required /></div>
                <div className='send'><textarea type='text'name='message' id="" cols="30" rows="10" placeholder='Your message here' style={{padding:"1rem"}}></textarea></div>
                <div className='send'><button className='btn' type='submit'>Send Message</button></div>
            </form>
        </div>  
        <div className='logo'>
        <GrInstagram size={40} style={{cursor:"pointer"}}  onClick={(e) => openLinkInNewTab('https://www.instagram.com/aditya_chinnawar/', e)}/>
        <AiFillLinkedin size={40} style={{cursor:"pointer"}} onClick={(e) => openLinkInNewTab('https://www.linkedin.com/in/aditya-chinnawar', e)}/>
        <AiFillGithub size={40} style={{cursor:"pointer"}}  onClick={(e) => openLinkInNewTab('https://github.com/AdityaChinnawar', e)}/>
        <SiLeetcode size={40} style={{cursor:"pointer"}}  onClick={(e) => openLinkInNewTab('https://leetcode.com/AdityaChinnawar/', e)}/>
        </div>
        </div>
     </section>
  )
}
export default Contactfront