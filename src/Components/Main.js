import React, { Component } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Pricing from './Pricing/Pricing'
import Contact_us from './Contact_us/Contact_us'
import Form from './Sign_up/Form'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
           <React.Fragment>
                <Navbar></Navbar> 




            <Router>
                    {/* SPA start  */}

                    <Switch>
                        <Route path="/"exact component={Home}></Route>
                        <Route path="/Services" component={Form}></Route>
                        <Route path="/Contact_us"  component={Form}></Route>
                        <Route path ="/Pricing"  component={Pricing} ></Route>
                    </Switch>

                    {/* SPA end */}        
            </Router>



            
            <Footer></Footer>
           </React.Fragment>
        )
    }
}
