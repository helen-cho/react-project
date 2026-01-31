//부트스트랩 공식문서->Components->Modals->Static backdrop
import { useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GiConfirmed } from "react-icons/gi";
import { ModalContext } from './ModalContext';

const ConfirmModal = () => {
    const { mConfirm, setConfirm } = useContext(ModalContext);
    const closeRef = useRef(null);
    const handleClose = () => setConfirm({ show:false });
    const handlePrimary = () => {
        mConfirm.action();
        handleClose();
    }

    useEffect(()=>{
        if(closeRef.current) closeRef.current.focus();
    }, [mConfirm]);

    return (
        <Modal show={mConfirm.show } onHide={handleClose} backdrop="static" keyboard={ false } style={{top:'20%'}}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <GiConfirmed style={{color:'gray',fontSize:'40px'}}/>
                    <span className='ps-3'>질의</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{mConfirm.message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} ref={closeRef}>아니요</Button>
                <Button variant="primary" onClick={handlePrimary}>예</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ConfirmModal