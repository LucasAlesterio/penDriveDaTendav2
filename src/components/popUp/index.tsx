import React from 'react';
import {FiX} from 'react-icons/fi';
import {ContainerPopUp, ContainerClose, ContainerBody} from './style';

export default function PopUp({onClose = () => {}, open = false , title = '', children = <></>}){

    function close(){
        onClose();
    }
    return(
    <ContainerPopUp open={open}>
        <button onClick={close}/>
        <div>
            <header>
                <h3>{title}</h3>
            </header>
            <ContainerClose>
                <button onClick={close}> <FiX size="" color="C2C2C2"/> </button>
            </ContainerClose>
            <ContainerBody>
                {children}
            </ContainerBody>
        </div>
    </ContainerPopUp>
    );
}