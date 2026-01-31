//부트스트랩 공식문서->Components->Modals->Static backdrop
import { useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosAlert } from 'react-icons/io';
import { ModalContext } from './ModalContext';

const AlertModal = () => {
    const { mAlert, setAlert } = useContext(ModalContext);
    const closeRef = useRef(null);

    const handleClose = () => setAlert({
        ...mAlert, 
        show:false
    });

    useEffect(()=>{
        if(closeRef.current) closeRef.current.focus();
    });

    return (
        <Modal show={mAlert.show} onHide={handleClose} backdrop='false' keyboard={false} style={{top:'20%'}}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <IoIosAlert style={{color:'gray',fontSize:'40px'}}/>
                    <span>알림</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{mAlert.message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} ref={closeRef}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default AlertModal