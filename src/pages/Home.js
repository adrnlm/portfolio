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
                pin: true,
                pinSpacing: true,
                scrub: 1,
                markers: true,
                // start: 'top 60%',
                start: 'top 10%',
                end: '+=100%',
                // end: '+=4000',
            }
        }).from(
            '.aboutContent', {
                xPercent: -200,
                opacity: 0,
                duration: 2,
                ease: 'Power1.easeInOut'
            }
        )
        .to(
            '.content', {   
                opacity: 1,
                duration: 1,
                ease: 'Power1.easeInOut'
            }
        )

        

    })

    return (
        <div className="home">
           <div className="intro"> 
                <IntroText/>
                <AvatarAnimation/>
                <div className="circle"></div>
                <span className="scrollDown">SCROLL DOWN</span>
            </div>
           
            <div className="aboutSection">
                <div className="block"></div>
                <div className="aboutContent">
                    <h1 className="title"> ABOUT ME</h1>
                    <span className="content"> I'm an aspiring front-end developer with a passion for graphic design. Crrently expanding my skills in UI/ UX and After Effects.</span>
                    <span className="content"> When neither designing nor developing, I like to to sit back with a book and a cup of Ethiopian coffee.</span>
                </div>
                
            </div>

            <div className="test">

            </div>
           
        </div>
    );
}

export default Home;