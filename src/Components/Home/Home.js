import React from 'react'
import {NewsCompDetails } from '../../Shared/NewsCompDetails'
import './Home.css'
import Market_status from './Market_status/Market_status';
import News from './News/News';
import Typical from 'react-typical'
import Pricing from './Pricing/Pricing';



function Home() {
    return (
        <React.Fragment>
            <React.Fragment >
            {NewsCompDetails.map((Detail,index)=> {
                return(
                    <React.Fragment>
                        <News  Services={Detail}></News>
                        
                    </React.Fragment>
                )
            })}
            </React.Fragment>
            <Pricing ></Pricing>
            <Market_status></Market_status>
        </React.Fragment>
    )
} 

export default Home
