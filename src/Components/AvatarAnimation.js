import React, { useRef } from 'react';
import lottie from 'lottie-web'

import '../css/AvatarAnimation.css'
import avatarAnim from './Avatar.json';

function AvatarAnimation() {

    const animContainer = useRef();

    React.useEffect(() => {

        // Lottie files Animation
        lottie.loadAnimation({
            container: animContainer.current,
            renderer: 'svg',
            animationData: avatarAnim,
            autoplay: true,
            loop: true
        });

    }, [])


    return (
        <div className="animContainer">
            <div ref={animContainer} className="animation"></div>
        </div>
    );
}

export default AvatarAnimation;