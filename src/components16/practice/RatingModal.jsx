import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

const RatingModal = ({ product }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [raging, setRating] = useState(0);

    const onChangeRating = (e) => {
        setRating(e);
        console.log(e);
    }

    const onRegister = () => {
        alert(`상품번호:${product.id}\n상품명:${product.title}\n별점:${raging}`);
    }

    return (
        <>
            <Button variant="link" onClick={handleShow} size='sm'>
                별점변경
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{top:'20%'}}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.id}. {product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span className='me-3'>{product.description}</span>
                        <Rating size={30} iconsCount={5} fillIcon={<FaHeart/>} emptyIcon={<FaRegHeart/>} initialValue={product.rating} allowFraction={true} readonly={true} fillColor='brown'/>
                    </div>
                    <Rating allowFraction={true} onClick={onChangeRating}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onRegister}>Register</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default RatingModal