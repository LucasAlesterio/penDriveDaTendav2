import styled from 'styled-components';

const ContainerInputPhoto = styled.div`
    height: 20rem;
    width: auto;
    & > label {
        cursor: pointer;
        & > div {
            height: 100%;
            width: 100%;
            border-radius: 100%;
            & > img {
                display: inline;
                margin: 0 auto;
                height: auto;
                min-height: 13rem;
                width: 100%;
            }
        }
    }
    & > input {
        display: none;
    }
`;

export { ContainerInputPhoto };
