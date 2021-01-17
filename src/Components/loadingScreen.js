import React, { useState, useRef } from 'react';
import lottie from 'lottie-web'

import logo from './logoAnimation.json';

import '../css/loadingScreen.css';

function LoadingScreen() {

    const [loadingComplete, hideLoading] = useState(false)

    const containerRef = useRef();

    React.useEffect(() => {

        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            animationData: logo,
            autoplay: true,
            loop: false
        });

        anim.onComplete = () => {
            anim.destroy();
            hideLoading(true)
        }

    })


    return (
        <div ref={containerRef} className={loadingComplete ? "container complete" : "container"} />
    );
}

export default LoadingScreen;