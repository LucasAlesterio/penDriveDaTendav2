import styled from 'styled-components';

const ContainerTextField = styled.div`
    width: 100%;
    height: auto;
    padding: 0.5rem;
`;

const ErrorText = styled.h4`
    font: 400 1.8rem Roboto, sans-serif;
    font-size: 1.2rem;
    color: #ff2121;
`;

const SectionField = styled.div`
    width: 100%;
    display: flex;
`;

const InputText = styled.input`
    font: 400 1.8rem Roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.cinzaClaro};
    border-radius: 5px;
    border: ${({ error }: { error: boolean }) => (error ? 'red solid 2px' : 'none')};
    width: 100%;
    height: 3.5rem;
    color: ${({ theme }) => theme.colors.cinzaEscuro};
    padding-left: 3.5rem;
`;

const Icon = styled.div`
    position: absolute;
    z-index: 2;
    height: auto;
    padding: 0.8rem 0 0 0.8rem;
`;

export { ContainerTextField, ErrorText, SectionField, InputText, Icon };
