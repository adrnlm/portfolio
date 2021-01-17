import lottie from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollLottie = (obj) => {

    let anim = lottie.loadAnimation({
        container: document.querySelector(obj.target),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        // path: obj.path,
        animationData: obj.animationData,
    });

    let timeObj = { currentFrame: 0 }
    let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";

    ScrollTrigger.create({
        scroller: obj.scroller,
        trigger: obj.target,
        scrub: obj.scrub,
        pin: true,
        start: obj.start,
        markers: obj.markers,
        pinSpacing: obj.pinSpacing,
        toggleClass: obj.toggleClass,
        end: endString,
        onUpdate: self => {
            if (obj.duration) {
                gsap.to(timeObj, {
                    duration: obj.duration,
                    currentFrame: (Math.floor(self.progress * (anim.totalFrames - 1))),
                    onUpdate: () => {
                        anim.goToAndStop(timeObj.currentFrame, true)
                    },
                    ease: 'expo'
                })
            } else {
                anim.goToAndStop(self.progress * (anim.totalFrames - 1), true)
            }
        }
    });

}