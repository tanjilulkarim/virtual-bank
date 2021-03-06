import React, { useState } from 'react';
import { Button } from '../Button/ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from '../InfoSection/InfoSectionElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark1, dark2 }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                        primary='true'
                                        dark='true'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}

                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;