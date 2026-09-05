import React from "react";
import styled from "styled-components";

const StyledFrame = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(-85deg);
    transition: all 0.5s ease;
`;

const StyledRing = styled.circle`
    stroke: ${props => props.color || "white"};
    fill: transparent;
    stroke-width: ${props => props.stroke || 4};
    stroke-linecap: round;
    stroke-dasharray: ${props => props.circumference};
    stroke-dashoffset: ${props => props.strokeDashoffset};
    transition: all 1s ease;
`;

function ProgressRing(props) {
    const { stroke = 4, progress = 0, color, pRef } = props;
    const size = 100;
    const center = size / 2;
    const r = center - stroke / 2;
    const circumference = 2 * Math.PI * r;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <StyledFrame
            ref={pRef}
            viewBox={`0 0 ${size} ${size}`}
            {...props}
        >
            <StyledRing
                color={color}
                stroke={stroke}
                circumference={circumference}
                strokeDashoffset={strokeDashoffset}
                r={r}
                cx={center}
                cy={center}
            />
        </StyledFrame>
    );
}

export default ProgressRing;