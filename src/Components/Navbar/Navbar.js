import React, { Component } from 'react'
import {Nav_items} from '../../Shared/Nav_items'
import {
GiSteak,
GiHamburgerMenu,
}  from 'react-icons/gi'
import Button from '../Button/Button'

import{ FaTimes} from 'react-icons/fa'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            clicked:true
        }
    }
    Click_handler = ()=>{
        this.setState({
            clicked:!this.state.clicked
        })
    }

    render() {
        return (
            <nav className="Nav_items">
                <GiSteak className="Nav_icon"></GiSteak>
                <h1 className="Nav_logo">Stake</h1>
                <div className="Hamb_menu">
                    {this.state.clicked ? <GiHamburgerMenu className="Hamb_times" onClick={this.Click_handler}/>:<FaTimes className="Hamb_times" onClick={this.Click_handler}/>
                    }
                    </div>
                <ul className={this.state.clicked ? 'Nav_menu':'Nav_menu active'}>
                    {Nav_items.map((item,index)=>{
                        return(
                            <li><a class={item.class} href={item.url}>{item.item}</a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
