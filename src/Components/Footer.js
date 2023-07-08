import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <h1>Contact Us:-</h1>
            <div style={{paddingLeft:'10%', paddingRight:'20%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <p><h3>Address:</h3><i class="fa-solid fa-map-pin"></i><b> Qspiders, Jspiders, Pyspiders</b>,<br/> Ramtekdi chowk, Hadapsar,<br/> Pune, Maharashtra.</p>
            <p><h3>Contact:</h3><i class="fa-solid fa-envelope"></i> shopmore@abcd.com<br/><i class="fa-solid fa-phone"></i>+91 9876543210</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer