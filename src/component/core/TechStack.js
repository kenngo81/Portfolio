import styled from "styled-components";
import LazyImage from "./LazyImage";

const StyledTechStack = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 0 2rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 0.75rem;
        gap: 0.35rem;
        justify-content: center;
        margin-top: 1rem;
    }

    & > h1 {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: var(--headerFont);
        width: 100%;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 1.3rem;
        }
    }

    & > img {
        min-width: 2rem;
        min-height: 28px;
        background-color: var(--primary);
        transition: transform 0.2s ease-in-out;
        :hover {
            transform: scale(1.1);
        }
    }
`;

function TechStack(props) {
    return (
        <StyledTechStack>
            <h1>TechStack :</h1>
            <LazyImage src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt=".Net" />
            <LazyImage src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&amp;logo=c-sharp&amp;logoColor=white" alt="C#" />
            <LazyImage src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&amp;logo=c&amp;logoColor=white" alt="C" />
            <LazyImage src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white" alt="C++" />
            <LazyImage src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&amp;logo=java&amp;logoColor=white" alt="Java" />
            <LazyImage src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=ffdd54" alt="Python" />
            <LazyImage src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="JavaScript" />
            <LazyImage src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5" />
            <LazyImage src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="CSS3" />
            <LazyImage src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="React" />
            <LazyImage src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" alt="Styled Components" />
            <LazyImage src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="NodeJS" />
            <LazyImage src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&amp;logo=fastapi" alt="FastAPI" />
            <LazyImage src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&amp;logo=android&amp;logoColor=white" alt="Android" />
            <LazyImage src="https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=for-the-badge&amp;logo=jetpackcompose&amp;logoColor=white" alt="Jetpack Compose" />
            <LazyImage src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&amp;logo=Flutter&amp;logoColor=white" alt="Flutter" />
            <LazyImage src="https://img.shields.io/badge/Entity%20Framework-512BD4?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt="Entity Framework" />
            <LazyImage src="https://img.shields.io/badge/SignalR-512BD4?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt="SignalR" />
            <LazyImage src="https://img.shields.io/badge/WPF-512BD4?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt="WPF" />
            <LazyImage src="https://img.shields.io/badge/WinForms-512BD4?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt="WinForms" />
            <LazyImage src="https://img.shields.io/badge/MVC-512BD4?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt="MVC" />
            <LazyImage src="https://img.shields.io/badge/MVVM-512BD4?style=for-the-badge&amp;logo=.net&amp;logoColor=white" alt="MVVM" />
            <LazyImage src="https://img.shields.io/badge/MVP-512BD4?style=for-the-badge" alt="MVP" />
            <LazyImage src="https://img.shields.io/badge/Clean%20Architecture-00599C?style=for-the-badge" alt="Clean Architecture" />
            <LazyImage src="https://img.shields.io/badge/Microservices-384E54?style=for-the-badge" alt="Microservices" />
            <LazyImage src="https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&amp;logo=microsoft%20sql%20server&amp;logoColor=white" alt="MicrosoftSQLServer" />
            <LazyImage src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" alt="MySQL" />
            <LazyImage src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white" alt="PostgreSQL" />
            <LazyImage src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" alt="MongoDB" />
            <LazyImage src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&amp;logo=sqlite&amp;logoColor=white" alt="SQLite" />
            <LazyImage src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&amp;logo=firebase" alt="Firebase" />
            <LazyImage src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white" alt="AWS" />
            <LazyImage src="https://img.shields.io/badge/Azure-%230072C6.svg?style=for-the-badge&amp;logo=microsoftazure&amp;logoColor=white" alt="Azure" />
            <LazyImage src="https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&amp;logo=google-cloud&amp;logoColor=white" alt="Google Cloud" />
            <LazyImage src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&amp;logo=docker&amp;logoColor=white" alt="Docker" />
            <LazyImage src="https://img.shields.io/badge/DevOps-000000?style=for-the-badge&amp;logo=azuredevops&amp;logoColor=white" alt="DevOps" />
            <LazyImage src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&amp;logo=nginx&amp;logoColor=white" alt="Nginx" />
            <LazyImage src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&amp;logo=webpack&amp;logoColor=black" alt="Webpack" />
            <LazyImage src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&amp;logo=npm&amp;logoColor=white" alt="NPM" />
            <LazyImage src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&amp;logo=jquery&amp;logoColor=white" alt="jQuery" />
            <LazyImage src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&amp;logo=opencv&amp;logoColor=white" alt="OpenCV" />
            <LazyImage src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" alt="Postman" />
        </StyledTechStack>
    )
}

export default TechStack;