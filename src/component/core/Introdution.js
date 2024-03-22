import styled from 'styled-components';
import Link from "../core/Link";
import RandomQuote from './RandomQuote';

const StyledLink = styled(Link)`
    color: var(--secondary);
`;

const StyledIntrodution = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    line-height: 1.3;
    font-family: var(--textFont);
    & > h1 {
        font-size: 2rem;
        text-align: center;
    }
    & > h2 {
        font-size: 1.5rem;
        margin-top: 1rem;
    }
    & > ul {
        position: relative;
        padding: 1.5rem 1rem;
        list-style: none;
        width: 90%;
        border: 2px solid var(--text);
        & > h3 {
            position: absolute;
            top: 100%;
            left: 50%;
            padding: 0.5rem;
            transform: translate(-50%, -50%);
            text-align: center;
            background-color: var(--background);
        }
        & > li {
            text-indent: 1rem;
        }
    }
`;

function Introdution(props) {
    return (
        <StyledIntrodution>
            <h1>Hi everyone, I'm Ken Biker<br />(KenRaver81)</h1>
            <RandomQuote />
            <h2>Who am I?</h2>
            <ul>
                <li>📄 Is a software engineer.</li>
                <li>📸Is a video & photo content creator</li>
                <li>✈ Having many years of experience in the Logistics industry.</li>
                <li>📚 Studying at Nguyen Chi Thanh High School.</li>
                <h3>IT'S ME</h3>
            </ul>
            <h2>#Social Activities</h2>
            <ul>
                <li>🥈Color Me Run volunteer team Leader 
                    <StyledLink href='https://www.colormerun.vn/'> Color Me Run</StyledLink>.
                    You can see my dumb face <StyledLink href='https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/64944964_2133370766792040_2206205673526525952_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=z92AuwBqpmAAX-1U4I-&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-pJDBrhlYrGVBh02A5_VXcmR2E_NGTEe2ZJtuRyfeM7Q&oe=623E308C'>here</StyledLink>.
                </li>
                <li>🥈RMF volunteer team Leader 
                    <StyledLink href='https://www.facebook.com/RavolutionFestival/'> Ravolution Music Festival</StyledLink>.
                    You can see me <StyledLink href='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/79536503_2450308415098272_6395606075004944384_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=3C8ytwh8DUIAX_Bm_eR&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_vlmZRaA_NZpOiOJcpEgY5GbIJxurFTPCpYI0bA7uAiA&oe=623E0C20'>here</StyledLink>.
                </li>
                <li>🙋‍♂️VUG organizing committee 
                    <StyledLink href='https://vug.vn/'> Viet Nam University Game</StyledLink>.
                </li>
                <li>🐯Co-Founder :IUH Crimson Tiger - Industrial University of Ho Chi Minh City 🐯
                    <StyledLink href='https://www.facebook.com/IUH.VUG'> IUH Crimson Tiger - Industrial University of Ho Chi Minh City</StyledLink>.
                </li>
                <li>🙋‍♂️Co-Founder EDM Hub Community 🎧:
                You can see me <StyledLink href='https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/62131187_2101173763345074_7741112985451495424_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=AKTxuz1ThF0AX8LdeAc&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT_IqZ8KpN9vg2skP_QPJGm-dFxwxyTTL-xWPv0AINZi7Q&oe=623DAF12'>here</StyledLink>.
                </li>
            </ul>
            <h2>Achievements</h2>
            <ul>
                <li>University Scholarships 2015-2016
                </li>
            </ul>
        </StyledIntrodution>
    )
}

export default Introdution;