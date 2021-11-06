import { ReactChild } from 'react';
import Footer from '../footer';
import Header from '../header';
import { Container } from './styles';

interface Props {
    children: ReactChild[];
}
export default function BaseLayout({ children }: Props) {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
}
