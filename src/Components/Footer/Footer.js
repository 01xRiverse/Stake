import React, { Component } from 'react'
import './Footer.css'
import './Socials.css'


function Footer(props) {
    return(
   <div className="footer">
       <div className="container">
           <div className="footer_grid">
               <div className="footer_col " >
                   <span className="text">About us</span>
                   <ul className="list-unstyled ">
                        <li><h6 className="link">Home</h6></li>
                        <li><h6 className="link">Staff</h6></li>
                        <li><h6 className="link">Story</h6></li>
                        <li><h6 className="link">Opporutnites</h6></li>
                    </ul>
               </div>
               <div className="footer_col">
               <span className="text">Services</span>
                    <ul className="list-unstyled ">
                        <li><h6 className="link">Clients</h6></li>
                        <li><h6 className="link">Mags</h6></li>
                        <li><h6 className="link">Technical Analysis</h6></li>
                        <li><h6 className="link">DEX</h6></li>
                    </ul>
                </div>
                <div className="footer_col">
                <span className="text">Contact us</span>
                    <ul className="list-unstyled ">
                        <li><h6 className="link">India</h6></li>
                        <li><h6 className="link">USA</h6></li>
                        <li><h6 className="link">United Kingdom</h6></li>
                        <li><h6 className="link">Support</h6></li>
                        
                    </ul>

                </div>
                <div className="footer_col">
                <span className="text">Socials</span>
                    <ul class="list-unstyled ">

                        <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-twitter"></i></a>
                        </li>
                        
                        <li class="icon-item">
                        <a href="#" class="icon-link"><i class="fab fa-github"></i></a>
                        </li>    
                    </ul>

    
                </div>

           </div>
       </div>
   </div>
    )
}

export default Footer;
