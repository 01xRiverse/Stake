import React, { Component } from 'react'
import './Footer.css'
import Socials from "./Socials/Socials"

function Footer(props) {
    return(
   <div className="footer">
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-lg-3 col-6 " >
                   <h3 className="text ">About us</h3>
                   <ul className="list-unstyled ">
                        <li><h6 className="link">Home</h6></li>
                        <li><h6 className="link">Staff</h6></li>
                        <li><h6 className="link">Story</h6></li>
                        <li><h6 className="link">Opporutnites</h6></li>
                    </ul>
               </div>
               <div className="col-lg-3 col-6">
                    <h3 className="text">Services</h3>
                    <ul className="list-unstyled ">
                        <li><h6 className="link">Clients</h6></li>
                        <li><h6 className="link">Mags</h6></li>
                        <li><h6 className="link">Technical Analysis</h6></li>
                        <li><h6 className="link">DEX</h6></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-6">
                    <h3 className="text">Contact us</h3>
                    <ul className="list-unstyled ">
                        <li><h6 className="link">India</h6></li>
                        <li><h6 className="link">USA</h6></li>
                        <li><h6 className="link">United Kingdom</h6></li>
                        <li><h6 className="link">Support</h6></li>
                    </ul>

                </div>
                <div className="col-lg-3 col-6">
                    <h3 className="text">Socials</h3>
                    <Socials></Socials>
                </div>

           </div>
       </div>
   </div>
    )
}

export default Footer;
