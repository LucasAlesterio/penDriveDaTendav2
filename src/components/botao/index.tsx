import styled from 'styled-components';

const ContainerBotao = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.amarelo};
    border-radius: 5px;
    padding: 0.8rem;
    color:${({theme}) => theme.colors.cinzaEscuro};
    border:${({theme}) => theme.colors.amarelo} solid 2px;
    &:hover {
        border:white solid 2px;
    }
`;

interface Props {
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    children: React.ReactNode;
    title?: string;

}
export default function Botao({onClick , type = 'button', title, children }:Props){
    return(
        <ContainerBotao onClick={onClick} type={type} title={title}>
            {children}
        </ContainerBotao>
    );
}