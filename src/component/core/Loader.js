import styled from "styled-components";
import StyledLandingPage from "./LandingPage";

const Loader = styled(StyledLandingPage)`
    filter: grayscale(100%);
    background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/801d5642652707.57d29c9dd3245.gif); 
    &::before {
        content: 'LOADING';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10rem;
        font-family: var(--headerFont);
        color: white;
    }
`;
//anh aboutme
export default Loader;