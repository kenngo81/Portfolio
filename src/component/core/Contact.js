import styled from "styled-components";
import IonIcon from "./IonIcon";
import Link from "./Link";

const StyledContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    gap: 10px;
`;

const StyledLink = styled(Link)`
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.5);
        filter: brightness(1.5);
    }
`;

function ContactLink(props) {
    return (
        <StyledLink href={props.href}>
            {props.placeholder}
            <IonIcon icon={props.icon} size="large"/>
        </StyledLink>
    );
}

function Contact(props) {
    return (
        <StyledContact>
            <ContactLink href="https://www.facebook.com/kenngo81" icon="logo-facebook" />
            <ContactLink href="https://github.com/kenngo81" icon="logo-github" />
            <ContactLink href="https://www.instagram.com/ken_biker/" icon="logo-instagram" />
            <ContactLink href="mailto:ngotrungduc777@gmail.com" icon="mail-open" />
        </StyledContact>
    );
}

export default Contact;