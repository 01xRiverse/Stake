import React, { Component } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>

                <Home></Home>

                
                <Footer></Footer>
            </div>
        )
    }
}
