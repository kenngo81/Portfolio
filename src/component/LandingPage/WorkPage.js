import React from "react";
import styled from 'styled-components';
import StyledLandingPage from '../core/LandingPage';
import Maintain from '../core/Maintain';
import WorkTile from '../core/WorkTile';
import PageSwitcher from '../core/PageSwitcher';
import useStore from "../../hook/useStore";
import TextAround from "../core/TextAround";
import { getMeta } from "../utils/SEO";
import { vh } from "../utils/_CSSUnits";
import Link from '../core/Link';
import IonIcon from '../core/IonIcon';

const StyledWorkPage = styled(StyledLandingPage)`
    display: flex;
    gap: 10%;
    justify-content: flex-end;
    align-items: start;
    padding-right: 5vw;
    background-image: url('https://steamuserimages-a.akamaihd.net/ugc/1559891726093942691/DCA091F0E5821D0833EF7D8F157381A74E05EE4D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false');
    background-size: cover;
    background-position: center;

    position: relative;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--background);
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        justify-content: center;
        padding-right: 0;
    }
`;

const StyledWorks = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 100vw;
    height: 100vh;
    border-left: 5px solid var(--primary);
    border-right: 5px solid var(--primary);
    box-shadow: 0px 0px 20px var(--background);
    transition: transform 0.5s ease-in-out;
    padding-bottom: var(--footerHeight);
    scroll-behavior: smooth;
    backdrop-filter: contrast(0.5);

    // active scrollbar but hidden
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        width: 100%;
        border-left: none;
        border-right: none;
        background: rgba(0, 0, 0, 0.7);
    }
`;

const StyledSwitcher = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const StyledMaintain = styled(Maintain)`
    margin-top: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledLinkedIn = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    min-height: 80px;
    color: var(--text);
    font-family: var(--codeFont);
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    backdrop-filter: contrast(0.6);
    transition: all 0.3s ease;
    opacity: 0.7;

    &:hover {
        opacity: 1;
        backdrop-filter: contrast(0.3);
    }

    & > ion-icon {
        font-size: 1.6rem;
        color: #0A66C2;
    }

    @media (max-width: 768px) {
        min-height: 60px;
        font-size: 0.8rem;
        gap: 6px;

        & > ion-icon {
            font-size: 1.2rem;
        }
    }
`;

async function getWorks(works) {
    try {
        const metaData = await Promise.all(works.map(work => getMeta(work.url)));
        return metaData.map((meta, index) => ({
            ...works[index],
            ...(meta || {}),
        }));
    } catch (error) {
        console.error(error);
        return works || [];
    }
}

function WorkPage(props) {
    const { componentIndex, center, moveSlide } = props;
    const [hoverIndex, setHoverIndex] = React.useState(0);
    const [works, setWorks] = React.useState([]);
    const goToNextPage = useStore(state => state.nextPage);
    const goToPrevPage = useStore(state => state.prevPage);
    const index = useStore(state => state.slideIndex);
    const worksEl = React.useRef(null);
    const sections = [...new Set((works || []).map(project => project.section).filter(Boolean))];

    const isOnPage = () => {
        return index === componentIndex;
    }
    const onClick = () => {
        if (index < componentIndex) goToNextPage();
        else goToPrevPage();
    };
    const getSectionIndex = () => sections.indexOf(works[hoverIndex]?.section);

    React.useEffect(() => {
        let isMounted = true;
        fetch(`${process.env.PUBLIC_URL}/data/works.json`)
            .then(res => res.json())
            .then(data => getWorks(data)
                .then(result => {
                    if (isMounted && result) setWorks(result);
                }))
            .catch(console.error);
        return () => {
            isMounted = false;
        };
    }, []);

    React.useEffect(() => {
        moveSlide(index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <StyledWorkPage>
            <StyledSwitcher>
                {React.useMemo(() => <PageSwitcher
                    activeScrollBar={true}
                    refEl={worksEl}
                    centerIndex={center}
                    pageIndex={componentIndex}
                    active={isOnPage()}
                    onClick={onClick}
                // eslint-disable-next-line react-hooks/exhaustive-deps
                />, [index])}
                <TextAround
                    texts={sections}
                    activeAt={getSectionIndex()}
                    active={isOnPage()}
                    radius={vh(18)}
                />
            </StyledSwitcher>
            <StyledMaintain componentIndex={componentIndex}>
                <h1>Work</h1>
                <p>Live for work, and work will let you do everything.</p>
                <p>
                   Study hard-Work hard-Play hard 
                </p>
            </StyledMaintain>
            <StyledWorks ref={worksEl}>
                {React.useMemo(() => {
                    return works.map((work, index) => (
                        <WorkTile
                            key={index}
                            index={index}
                            title={work.title}
                            image={work.image}
                            url={work.url}
                            onMouseEnter={() => setHoverIndex(index)}
                        />
                    ))
                }, [works])}
                <StyledLinkedIn href="https://www.linkedin.com/in/duc-ngotrung-076237130">
                    <IonIcon icon="logo-linkedin" />
                    LinkedIn
                </StyledLinkedIn>
            </StyledWorks>
        </StyledWorkPage>
    )
}

export default React.memo(WorkPage);