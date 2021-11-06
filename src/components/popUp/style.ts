import styled, { keyframes } from 'styled-components';

interface PopUpProps {
    open: boolean;
}
const rotate = keyframes`
    from {
        opacity: 0;
        margin-top: -80px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`;
const ContainerPopUp = styled.div<PopUpProps>`
    display: ${({ open }) => (open ? 'flex' : 'none')};
    z-index: 9;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    & > button {
        z-index: 9;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
    }
    & > div {
        animation: ${rotate} 0.3s ease-out;
        z-index: 10;
        background-color: ${({ theme }) => theme.colors.cinzaMedio};
        width: 40rem;
        min-height: 10rem;
        border: ${({ theme }) => theme.colors.amarelo} solid 2px;
        & > header {
            background-color: ${({ theme }) => theme.colors.cinzaEscuro};
            width: 100%;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
const ContainerClose = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    & > button {
        background: none;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        bottom: 2.9rem;
        right: 0.5rem;
        width: 2rem;
        z-index: 10;
    }
`;
const ContainerBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;
export { ContainerPopUp, ContainerClose, ContainerBody };
