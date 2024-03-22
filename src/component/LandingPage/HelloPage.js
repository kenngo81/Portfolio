import styled, { keyframes } from "styled-components";
import React from "react";
import StyledLandingPage from "../core/LandingPage";
import Maintain from "../core/Maintain";
import TextAround from "../core/TextAround";
import AudioSphere from "../core/AudioSphere";
import useStore from "../../hook/useStore";
import { vh } from "../utils/_CSSUnits";

const Rotate = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;
// anh hello page
const StyledHelloPage = styled(StyledLandingPage)`
    --ringBorder: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99f70542652707.57d29c9e48f8c.gif);
    

    &::before {
        content: '';
        position: absolute;
        width: 75vh;
        height: 75vh;
        /* gradient border with radius (trick) */
        border: var(--ringBorder) solid transparent;
        background:
            linear-gradient(to right, 
                #FE6A50, 
                #ED00AA, 
                #2FE3FE, 
                #8900FF),
            border-box;
        background-size: calc(100% + var(--ringBorder) * 2) calc(100% + var(--ringBorder) * 2);
        background-position: center;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        border-radius: 50%;
        mask-composite: exclude;
        /* end trick */
        margin: auto;
        z-index: 1;
        animation: ${Rotate} 10s alternate infinite;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: var(--background);
        opacity: 0.5;
        z-index: 0;
    }
`;

const StyledHelloWorld = styled.div`
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

const mySkills = [
    'Back-end',
    'Front-end',
    'Graphic Designers',
    'Player',
    'Gamer',
    'Raver',
]

function HelloPage(props) {
    const { componentIndex } = props;
    const index = useStore(state => state.slideIndex);
    
    return (
        <StyledHelloPage>
            {React.useMemo(() => {return <AudioSphere src={`${process.env.PUBLIC_URL}/audios/870Glizzy - Fuck Shit.mp3`} />}, [])}
            <TextAround 
                texts={mySkills} 
                radius={vh(40)}
                active={index === componentIndex} />
            <StyledHelloWorld>
                <Maintain componentIndex={componentIndex}>
                    <h1>KeN <span></span>Hello, World!</h1>
                    <p>
                        I'm Ken Biker aka from Gia Lai Country<br /><br />
                        I dedicate myself to my work, because it helps me maintain my life and fulfill my dreams
                    </p>
                </Maintain>
            </StyledHelloWorld>
        </StyledHelloPage>
    );
}
export default HelloPage;