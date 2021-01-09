import React from 'react';

// import lottie from 'lottie-web';
// import '@lottiefiles/lottie-player';
// import {gsap, TimelineMax} from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { create } from '@lottiefiles/lottie-interactivity';

import '../css/logoAnimation.css';
import {ScrollLottie} from '../Components/ScrollLottie'
import logo from './logoAnimation.json';

// gsap.registerPlugin(ScrollTrigger);

const LogoAnimation = () => {

    React.useEffect(() => {

        ScrollLottie({
            scroller: '.container',
            target: '.logoAnimation',
            start: 'top top',
            scrub: 0.5,
            animationData: logo,
            duration: 3,
            speed: 'fast',
            pinSpacing: false,
            markers: false,
        })

    })
  
    

        return (
            <div className="container">
                <div className="logoAnimation"/> 
                {/* <section></section> */}
            </div>
            
        );
                    
    
}

export default LogoAnimation;