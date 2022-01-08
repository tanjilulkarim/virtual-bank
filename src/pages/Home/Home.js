import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../components/InfoSection/Data';
import InfoSection from '../../components/InfoSection/InfoSection';

import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar/SideBar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    );
};

export default Home;