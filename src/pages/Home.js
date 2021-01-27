import React from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AvatarAnimation from '../Components/AvatarAnimation'
import IntroText from "../Components/IntroText";

import '../css/Home.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    React.useEffect(() => {

        // Scroll Down
        gsap.timeline({repeat: -1}).from(
            '.scrollDown',{
                yPercent: -2,
                duration: 2,
                ease: "power1.inOut",
                repeat: 1
            }
        ).from(
            '.scrollDown',{
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                yoyo: true,
                repeat: 1
            },
            0
        )

        //Scroll Trigger for intro
        gsap.timeline({
            scrollTrigger:{
                scroller: '.home',
                trigger:'.intro',
                pin: false,
                pinSpacing: false,
                scrub: 1,
                markers: false,
                start: 'bottom 80%',
                end: 'bottom 40%'
            }
        }).to(
            '.intro', {
                opacity: 0,
                ease: 'Power1.easeInOut'
            },
            0
        ).to(
            '.greeting', {
                xPercent: -100,
                ease: 'Power1.easeInOut'
            },
            0
        ).to(
            '.animContainer', {
                xPercent: 100,
                ease: 'Power1.easeInOut'
            },
            0
        )
        
        // Scroll Trigger for about
        gsap.timeline({
            scrollTrigger:{
                scroller: '.home',
                trigger:'.aboutSection',
                pin: false,
                pinSpacing: false,
                scrub: 2,
                markers: true,
                start: 'top 60%',
                end: '+=50%',
                // end: '+=4000',
            }
        }).to(
            '.block', {
                rotation: 24,
                duration: 10, 
                ease: 'Power1.easeInOut'
            }
        ).from(
            '.aboutContent', {
                opacity: 0,
                duration: 5,
                ease: 'Power1.easeInOut'
            },
            20
        )

        

    })

    return (
        <div className="home">
           <div className="intro"> 
                <IntroText/>
                <AvatarAnimation/>
                <span className="scrollDown">SCROLL DOWN</span>
            </div>
           
            <div className="aboutSection">
                <div className="block"></div>
                <div className="aboutContent">
                    <h1 className="title"> AB0UT </h1>
                    <span className="content"> Adrian is an aspiring front-end developer with a passion for graphic design. He's currently expanding his skills in UI/ UX and After Effects. When neither designing nor developing, he likes to sit back with a book and a cup of Ethiopian coffee.</span>
                </div>
                
            </div>
           
        </div>
    );
}

export default Home;