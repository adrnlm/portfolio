import React from "react";
import {gsap} from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

import '../css/IntroText.css'
gsap.registerPlugin(TextPlugin);

function IntroText() {

    React.useEffect(() => {

        const words = ['a graphic designer.', 'a web developer.', 'a coffee enthusiast.'];

        // Intro Text Animation
        gsap.to(
            '.cursor',
            {opacity: 0,
            ease: "power2.inOut",
            repeat: -1}
        )

        const masterTl = gsap.timeline({repeat: -1});
        
        words.forEach( word => {
            let tl = gsap.timeline({repeat: 1, yoyo:true});
            tl.to(".text",{duration:1.5, delay:.5, text: word});
            masterTl.add(tl);
        })

    }, [])

    return (
        <div className="greeting">
            <h1 > Hi,</h1>
            <h1>I'm Adrian,</h1>
            <h1>
                <span className="text"></span>
                <span className="cursor">_</span>
            </h1>     
        </div>
    )
}

export default IntroText;