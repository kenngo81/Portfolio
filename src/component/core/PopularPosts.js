import styled from 'styled-components';
import React from 'react';

const StyledPopularPosts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;

    & > h1 {
        font-size: 2rem;
        font-weight: bold;
        font-family: var(--headerFont);
    }

    @media (max-width: 768px) {
        padding: 0 0.5rem;
        align-items: center;
        & > h1 {
            text-align: center;
        }
    }
`;

const StyledIframeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > iframe {
        max-width: 100%;
        border-radius: 8px;
        border: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
`;

function PopularsPost() {
    return (
        <StyledPopularPosts>
            <h1>Some Thing</h1>
            <StyledIframeWrapper>
                <iframe
                    src="https://www.behance.net/embed/project/144848897?ilo0=1"
                    height="316"
                    width="404"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Behance Project"
                />
            </StyledIframeWrapper>
        </StyledPopularPosts>
    );
}

export default PopularsPost;