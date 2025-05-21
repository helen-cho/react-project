import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookPage = ({doc}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img style={{'cursor':'pointer'}}
                src={doc.thumbnail || 'https://placehold.co/100x145'} width="100%" onClick={handleShow}/>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>도서정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={3}>
                            <img src={doc.thumbnail} width='100%'/>
                        </Col>
                        <Col className='align-self-center'>
                            <h5>{doc.title}</h5>
                            <div>판매가: {doc.sale_price}원</div>
                            <div>저자: {doc.authors}</div>
                            <div>출판사: {doc.publisher}</div>
                            <div>ISBN: {doc.isbn}</div>
                            <div>출판일: {doc.datetime}</div>
                        </Col>
                    </Row>
                    <hr/>
                    <div>
                        {doc.contents || '내용없음'}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BookPage
