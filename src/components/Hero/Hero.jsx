import React from 'react';
import { Fade} from "reactstrap";
import './Hero.css'
import Lottie from "lottie-react"
import welcome from '../../assets/welcome.json'
import hero from '../../assets/hero.json'



export default function Hero() {
    return (
       <div className="main-hero-div">
            <div>
                <Lottie animationData={hero} loop={true} />
            </div>
            <Fade in={true}>
            <div className="welcome-div">
                <Lottie animationData={welcome} loop={true}/>
            </div>  
            </Fade>
        </div>
    )
}

