import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default class Landing extends Component {
    render() {
        return (
            <div>
               <Header/>
               <div id="home" class="full-section parallax-home">
                    <div class="slider-caption">
                        <h2> <span>Flora Field School CBT</span> <br/>- </h2> 
                        <h2> Computer Base Training <br/> Dashboard Portal </h2>
                        
                        <Link class="btn btn-transparent" to="/login"> Test Demo </Link> 
                        {/* <a class="btn btn-light" href="http://templates.scriptsbundle.com/series"> Partner </a>  */}
                    </div>
                </div>
               <Footer/>
            </div>
        )
    }
}
