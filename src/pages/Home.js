import React from "react";
import {gsap} from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AvatarAnimation from '../Components/AvatarAnimation'
import IntroText from "../Components/IntroText";

import '../css/Home.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    React.useEffect(() => {

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

        // //Scroll Trigger for block
        // gsap.timeline({
        //     scrollTrigger:{
        //         scroller: '.home',
        //         trigger:'.home',
        //         pin: false,
        //         pinSpacing: false,
        //         scrub: 1,
        //         markers: false,
        //         start: 'bottom 80%',
        //         end: 'bottom 30%'
        //     }
        // }).to(
        //     '.block', {
        //         rotation: 24,
        //         duration: 1, 
        //         ease: 'Power1.easeInOut'
        //     }
        // )
        
        // Scroll Trigger for text
        gsap.timeline({
            scrollTrigger:{
                scroller: '.home',
                trigger:'.aboutSection',
                pin: false,
                pinSpacing: false,
                scrub: 1,
                markers: true,
                start: 'top 60%',
                end: '+=400px',
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
            5
        )

    })

    return (
        <div className="home">
           <div className="intro"> 
                <IntroText/>
                <AvatarAnimation/>
            </div>
           
            <div className="aboutSection">
                <div className="block"></div>
                <div className="aboutContent">
                    <h1 className="title">A little about me</h1>
                    <span className="content">&emsp;&emsp;An aspiring front-end developer with a passion for graphic design. I thorougly enjoy solving problems and produce inspiring art. I'm currently exploring and expanding my skills in UI/ UX and After Effects. When I'm not working, I like to sit back with a book and a cup of Ethiopian coffee.</span>
                </div>
                
            </div>
           
        </div>
    );
}

export default Home;