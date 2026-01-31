import React, { useState } from 'react'
import { ModalContext } from './ModalContext';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';

const ModalProvider = ({children}) => {
    const [mAlert, setAlert] = useState({
        show:false,
        message:'',
    });

    const [mConfirm, setConfirm] = useState({
        show:false,
        message:'',
        action:()=>{}
    });

    return (
        <ModalContext.Provider value={{mAlert, setAlert, mConfirm, setConfirm}}>
            {children}
            <AlertModal/>
            <ConfirmModal/>
        </ModalContext.Provider>
    )
}
export default ModalProvider