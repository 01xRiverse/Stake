import React from 'react'
import Carousel from './Carousel/Carousel'
import { SliderData } from './Carousel/Data';
import './Home.css'
import Market_status from './Market_status/Market_status';
function Home() {
    return (
        <div>
            <Carousel slides={SliderData}></Carousel>
            <Market_status></Market_status>
            
            
        </div>
    )
}

export default Home
