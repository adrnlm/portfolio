import React from 'react';
import lottie from 'lottie-web';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import '../css/logoAnimation.css';
import logo from './logoAnimation.json';

const LogoAnimation = () => {


    let container = React.createRef();
    


    React.useEffect(() => {
        const anim = lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: logo
          });
          
        return () => anim.destroy();    
    }, []);



        return (
            <div className="test" ref={container}>
                {/* <h1>test</h1> */}
          
          </div>
        );
                    
    
}

export default LogoAnimation;