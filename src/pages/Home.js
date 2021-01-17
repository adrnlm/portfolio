import React, { useRef } from "react";
import lottie from 'lottie-web'
import {gsap} from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

import avatarAnim from '../Components/Avatar.json'
import '../css/Home.css';

gsap.registerPlugin(TextPlugin);

function Home() {

    const animContainer = useRef();

    const words = ['a graphic designer.', 'a web developer.', 'a coffee enthusiast.'];

    React.useEffect(() => {

        let cursor = gsap.to(
            '.cursor',
            {opacity: 0,
            ease: "power2.inOut",
            repeat: -1}
        );

        const masterTl = gsap.timeline({repeat: -1});
        
        words.forEach( word => {
            let tl = gsap.timeline({repeat: 1, yoyo:true});
            tl.to(".text",{duration:3, delay:1, text: word});
            masterTl.add(tl);
        })

        lottie.loadAnimation({
            container: animContainer.current,
            renderer: 'svg',
            animationData: avatarAnim,
            autoplay: true,
            loop: true
        });

    })

    return (
        <div className="home">
           <div className="intro"> 
                <h1> Hi,</h1>
                <h1>I'm Adrian,</h1>
                <h1>
                    <span className="text"></span>
                    <span className="cursor">_</span>
                </h1>
                
            </div>
            <div className="animContainer">
                <div ref={animContainer} className="animation"></div>
            </div>
           
        </div>
    );
}

export default Home;