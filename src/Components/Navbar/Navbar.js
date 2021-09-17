import React, { useState ,useEffect} from 'react';
import { MenuItems } from "../../Shared/Nav_items"
import {GiSteak} from 'react-icons/gi'
import  './Login/Login.css'
import './Navbar.css'
import UniversalButton from '../UniversalButton/UniversalButton';


const Navbar=() =>{
    const [scrollNav,setScrollNav]=useState(false)
    const [clicked,setClicked]=useState(false)
    const changeNav=()=>{
        if(window.scrollY >=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[]);

    const handleClick = () => {
        setClicked(!clicked)
    }

        return(
            <div className="Back-image">
                <nav onScroll={changeNav} className={clicked || scrollNav? "NavChange ":'NavSame  '}  >
                <GiSteak  className="Nav_icon"></GiSteak>
                <h1 className="navbar-logo">Stake</h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                               <div className="adjust-resp" > <a className={item.cName} href={item.url}>
                                    
                                    <span>{item.title}</span>
                                    </a></div>
                            </li>
                        )
                    })}
                
                   
                    
                </ul>
                <div className="adjust"><a className="button" >Login</a></div>
                
            </nav>
                <div className="image-content">
                    <h1 className="image-header">Where Lambo?</h1>
                    <div className="image-text">Delivering insights and oppurtunities </div>
                    <UniversalButton color={true}text="Get Started"></UniversalButton>
                </div>

            </div>
        )
    
}

export default Navbar
