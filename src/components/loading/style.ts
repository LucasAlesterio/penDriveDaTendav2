import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;
const ContainerLoading = styled.div`
    z-index: 15;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    & > div {
        animation: ${rotate} 2s linear infinite;
    }
`;

export { ContainerLoading };
