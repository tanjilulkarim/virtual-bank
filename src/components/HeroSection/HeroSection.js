import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Video from '../../videos/video.mp4'
import { Button } from '../Button/ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,

} from './HeroSectionElement';


// Hero section mean banner section;
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'
                    />
                </HeroBg>

                <HeroContent>
                    <HeroH1>
                        Virtual Banking Made Easy
                    </HeroH1>
                    <HeroP>
                        Sign up for a new account today and received $250 in credit towards your next payment.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='signup' onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                        >
                            Get Started {hover ? <ArrowForward /> : <FaArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>


    );
};

export default HeroSection;