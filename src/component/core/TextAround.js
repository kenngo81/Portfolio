import styled from "styled-components";
import React from "react";

const AVG_ANGLE = 5;

const StyledTextAround = styled.ul`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;

    @media (max-width: 768px) {
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        transform: translate(-50%, -50%);
    }
`;

const StyledText = styled.li`
    --opacity: 1;
    position: absolute;
    width: 100px;
    color: var(--text);
    opacity: calc(var(--opacity) * 1);
    font-family: var(--codeFont);
    font-weight: bold;
    text-shadow: 0 0 10px var(--background);
    z-index: 9999999;
    transition: all 0.5s ease;

    @media (max-width: 768px) {
        width: auto;
        white-space: nowrap;
        font-size: 0.52rem;
        line-height: 1.15;
        letter-spacing: 0.2px;
        left: 0;
        top: 0;
        text-shadow: 0 0 8px rgba(0, 0, 0, 0.95), 0 0 4px #000;
    }
`;

function TextAround(props) {
    const { 
        texts, 
        xOffset, yOffset, 
        radius, 
        active,
        activeAt } = props;
    const textEls = React.useRef([]);
    const textCount = texts.length;
    const center = (activeAt || activeAt === 0) ? activeAt : (textCount - 1) / 2;
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    const getAngle = (index) => {
        const offset = Math.round(index - (textCount / 2));
        return offset * AVG_ANGLE;
    }

    const getPosition = (index) => {
        if (isMobile) {
            const offset = index - center;
            const y = offset * 16;
            // Radius of inner audio sphere
            const rSphere = Math.min(window.innerWidth * 0.185, 70);
            // Curve hugging the outside perimeter of the inner audio wave
            const xEdge = Math.sqrt(Math.max(0, rSphere * rSphere - y * y * 0.95));
            const x = xEdge + 6;
            return { x, y };
        }
        const angle = getAngle(index);
        const x = (radius + (xOffset || 20)) * Math.cos(angle * Math.PI / 90);
        const y = (radius + (yOffset || 0)) * Math.sin(angle * Math.PI / 180);
        return { x, y };
    }

    React.useEffect(() => {
        const els = textEls.current;
        els.forEach((el, index) => {
            let { x, y } = getPosition(active ? index : 0);
            let opacity = 1;
            if (activeAt || activeAt === 0) {
                const offset = Math.round(index - activeAt);
                opacity = 1 - (Math.abs(offset) / textCount);
            }
            el.style.setProperty("--opacity", active ? opacity : 0);
            el.style.transform = isMobile
                ? `translate(${x}px, calc(-50% + ${y}px))`
                : `translate(calc(${x}px + 50%), ${y * 2}px)`;
        });
        return () => {
            els.forEach(el => el?.removeAttribute('active'));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, activeAt]);

    return (
        <StyledTextAround {...props}>
            {texts?.map((text, index) => {
                return (
                    <StyledText
                        key={index}
                        ref={ref => textEls.current[index] = ref}>
                        {text}
                    </StyledText>
                );
            })}
        </StyledTextAround>
    )
}

export default React.memo(TextAround);