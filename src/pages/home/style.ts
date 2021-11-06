import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
        width: 11rem;
    }
`;
const ContainerLanding = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    & > section {
        display: flex;
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 100%;
        align-items: center;
        padding-bottom: 6rem;
        & > img {
            width: 30%;
        }
        & > div {
            background-color: ${({ theme }) => theme.colors.cinzaEscuro};
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            min-height: 50%;
            padding: 3rem;
            & > button {
                font-size: 2.4rem;
                height: 6vh;
                width: 100%;
            }
            & > form > button {
                margin: 1rem 0;
            }
            & > p {
                padding: 1rem;
                text-align: center;
                color: ${({ theme }) => theme.colors.cinzaClaro};
                font-size: 1.3rem;
                & > button {
                    background: none;
                    border: none;
                    color: ${({ theme }) => theme.colors.amarelo};
                    font-size: 1.3rem;
                }
            }
        }
    }
`;
export { Form, ContainerLanding };
