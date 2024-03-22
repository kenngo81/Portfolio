import styled from 'styled-components';
import LandingPage from './core/LandingPage';

const StyledMobile = styled(LandingPage)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    overflow: hidden;
    background-image: url(https://media.giphy.com/media/xT1XGvP9LAVvQCrTk4/giphy.gif);
`;

const StyledMessage = styled.div`
    font-size: 1.5rem;
    font-family: var(--headerFont);
    backdrop-filter: blur(10px);
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    box-shadow: 0px 0px 30px var(--background);
    padding: 1rem;
`;

function Mobile(props) {
    return (
        <StyledMobile>
            <StyledMessage>Rotate Screen Horizontally For Best Performance.
            <img style={{opacity: 0.3, width:'100%', height:'20%'}} src={'https://i.gifer.com/GXor.gif'} alt="loading..." />
            </StyledMessage>
            
        </StyledMobile>
    );
}

export default Mobile;