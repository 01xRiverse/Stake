import React, { useState ,useEffect} from 'react';
import { MenuItems } from "../../Shared/Nav_items"
import {GiSteak} from 'react-icons/gi'
import './Login/Login.css'
import './Navbar.css'
import UniversalButton from '../UniversalButton/UniversalButton';
import {useHistory } from 'react-router-dom';
import {Link} from 'react-scroll'

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
    const LoginButton = () => {
        const history = useHistory();
    
        const handleClick = () => {
            history.push("/Login");
        }
    
        return (
            <div onClick={handleClick} className="adjust"><a className="button" >Login</a></div>
        );
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[]);

    const handleClick = () => {
        setClicked(!clicked)
    }

        return(
            <div className="Back-image" id="home">
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
                               <div className="adjust-resp" > <Link className={item.cName}  smooth={true} duration={100} to={item.url}>
                                    <span>{item.title}</span>
                               </Link></div>
                            </li>
                        )
                    })}
                
                   
                    
                </ul>
                <LoginButton to="/Login"></LoginButton>
                
                
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
