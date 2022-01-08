import React from 'react';
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-33.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesWrapper,


} from './ServicesElements';




const Services = () => {
    return (
        <>

            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}>
                        </ServicesIcon>
                        <ServicesH2>
                            Reduce expences
                        </ServicesH2>
                        <ServicesP>
                            We help reduce your fees and increase your overall revenue
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}>
                        </ServicesIcon>
                        <ServicesH2>
                            Virtual Offices
                        </ServicesH2>
                        <ServicesP>
                            You can access our platform online <br /> anywhere in the world
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}>
                        </ServicesIcon>
                        <ServicesH2>
                            Primium Benifits
                        </ServicesH2>
                        <ServicesP>
                            Unlock our special membership card that returns 5% cash back.
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>

        </>
    );
};

export default Services;