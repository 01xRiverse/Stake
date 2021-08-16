import React from 'react'
import "./Socials.css"
function Socials() {
  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>

    <ul class="list-unstyled">

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
      <a href="#" class="icon-link"><i class="fab fa-youtube"></i></a>
    </li>
    <li class="icon-item">
      <a href="#" class="icon-link"><i class="fab fa-linkedin-in"></i></a>
    </li>    
  </ul>
    </React.Fragment>
    
    
  )
}

export default Socials
