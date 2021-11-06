import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './_app.css';
interface Theme {
    colors: {
        amarelo: string;
        cinzaClaro: string;
        cinzaMedio: string;
        cinzaEscuro: string;
        cinzaClaroOpacity: string;
        rosa: string;
    };
}

const theme: Theme = {
    colors: {
        amarelo: '#FFEB0A',
        cinzaClaro: '#C2C2C2',
        cinzaMedio: '#151515',
        cinzaEscuro: '#0A0A0A',
        cinzaClaroOpacity: '194,194,194',
        rosa: '#FF6F6F'
    }
};

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font: 400 1.8rem Righteous, sans-serif;
}

:root {
    font-size: 60%;
}
@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}
body {
    background: ${theme.colors.cinzaMedio};
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
    border:none;
}

a {
    text-decoration: none;
}

h3{
    font-size: 2.5rem;
    color: ${theme.colors.amarelo};
}
h4{
    font-size: 1.5rem;
    color:${theme.colors.amarelo};
}
h1{
    color: ${theme.colors.amarelo};
    display: flex;
    justify-content: center;
    font-size: 4.5rem;
}

input{
    background-color:${theme.colors.cinzaClaro};
}
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
export default MyApp;
