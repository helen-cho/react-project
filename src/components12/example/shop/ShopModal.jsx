//이미지 칼럼 lg={4}
//lprice, productId, maker, mallName, category1
//html출력:dangerouslySetInnerHTML={{__html:shop.title}}
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShopModal = ({ shop }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <img style={{cursor:'pointer'}} onClick={handleShow} src={shop.image} width='100%' />
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>상품정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={4} className='mb-3'>
                            <img src={shop.image || 'http://placehold.co/100x150'} width='100%'/>
                        </Col>
                        <Col className='align-self-center'>
                            <div dangerouslySetInnerHTML={{__html:shop.title}}/>
                            <hr/>
                            <div className='mb-2'>가격: {shop.lprice ? parseInt(shop.lprice).toLocaleString(): '미정'}</div>                
                            <div className='mb-2'>상품ID: {shop.productId}</div>
                            <div className='mb-2'>제조사: {shop.maker}</div>
                            <div className='mb-2'>판매점: {shop.mallName}</div>
                            <div className='mb-2'>카테고리: {shop.category1}</div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ShopModal