import styled from 'styled-components';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const FooterBody = styled.footer`
    background-color: ${({ theme }) => theme.colors.cinzaEscuro};
    position: relative;
    bottom: 0;
    width: 100%;
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > section {
        display: flex;
        width: 12rem;
        justify-content: space-around;
        margin-right: 2rem;
    }
`;

export default function Footer() {
    return (
        <FooterBody>
            <section>
                <FiTwitter size="25" color="C2C2C2" />
                <FiFacebook size="25" color="C2C2C2" />
                <FiInstagram size="25" color="C2C2C2" />
            </section>
        </FooterBody>
    );
}
