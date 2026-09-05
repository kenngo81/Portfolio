import styled from 'styled-components';
import React from 'react';
import Introdution from './core/Introdution';
import TechStack from './core/TechStack';
import PopularsPost from './core/PopularPosts';
import WorkTile from './core/WorkTile';
import Contact from './core/Contact';
import Copyright from './core/Copyright';
import LazyImage from './core/LazyImage';
import { getMeta } from './utils/SEO';

const StyledMobileContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--background);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0.75rem 4rem 0.75rem;
    box-sizing: border-box;
    gap: 2.5rem;
`;

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
    width: 100%;
    max-width: 450px;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 12px;
    background: radial-gradient(circle at top, rgba(254, 106, 80, 0.15) 0%, transparent 70%);

    & > h1 {
        font-size: 2.2rem;
        font-family: var(--headerFont);
        font-weight: 800;
        margin: 0;
        color: var(--text);
    }

    & > p {
        font-family: var(--textFont);
        font-size: 0.95rem;
        color: #a0a0a0;
        margin: 0;
        line-height: 1.4;
    }
`;

const StyledAvatar = styled(LazyImage)`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid var(--secondary);
    background-color: var(--primary);
    box-shadow: 0 0 25px rgba(254, 106, 80, 0.4);
`;

const StyledSection = styled.section`
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const StyledSectionTitle = styled.h2`
    font-size: 1.8rem;
    font-family: var(--headerFont);
    color: var(--text);
    margin-bottom: 1.2rem;
    text-align: center;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 45px;
        height: 3px;
        background-color: var(--secondary);
        margin: 6px auto 0;
        border-radius: 2px;
    }
`;

const StyledWorksList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
`;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

async function fetchWorksList(works) {
    try {
        const metaData = await Promise.all(works.map(work => getMeta(work.url)));
        return metaData.map((meta, index) => ({
            ...works[index],
            ...(meta || {})
        }));
    } catch (e) {
        console.error(e);
        return works;
    }
}

function Mobile(props) {
    const [works, setWorks] = React.useState([]);

    React.useEffect(() => {
        let isMounted = true;
        fetch(`${process.env.PUBLIC_URL}/data/works.json`)
            .then(res => res.json())
            .then(data => fetchWorksList(data)
                .then(result => {
                    if (isMounted && result) setWorks(result);
                }))
            .catch(console.error);
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <StyledMobileContainer>
            <StyledHero>
                <StyledAvatar src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99f70542652707.57d29c9e48f8c.gif" alt="Ken Biker" />
                <h1>KeN Biker</h1>
                <p>Software Engineer &bull; AI Integration Engineer</p>
                <p>Gia Lai, Viet Nam</p>
                <Contact />
            </StyledHero>

            <StyledSection>
                <StyledSectionTitle>About Me</StyledSectionTitle>
                <Introdution />
            </StyledSection>

            <StyledSection>
                <TechStack />
            </StyledSection>

            <StyledSection>
                <StyledSectionTitle>Featured Works</StyledSectionTitle>
                <StyledWorksList>
                    {works.map((work, index) => (
                        <WorkTile
                            key={index}
                            index={index}
                            title={work.title}
                            image={work.image}
                            url={work.url}
                        />
                    ))}
                </StyledWorksList>
            </StyledSection>

            <StyledSection>
                <PopularsPost />
            </StyledSection>

            <StyledFooter>
                <Contact />
                <Copyright />
            </StyledFooter>
        </StyledMobileContainer>
    );
}

export default React.memo(Mobile);