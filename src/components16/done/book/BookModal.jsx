//className='align-self-center' 세로가운데 정렬
//이미지 칼럼 lg={4}
//book.datetime.substr(0, 10)
//title,contents,url,isbn,datetime,authors,publisher,status
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

const BookModal = ({book}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img style={{cursor:'pointer'}} onClick={handleShow} 
                src={book.thumbnail || 'http://placehold.co/100x150'} width='100%'/>
            <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>도서정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={4} className='mb-3'>
                            <img src={book.thumbnail || 'http://placehold.co/100x150'} width='100%'/>
                        </Col>
                        <Col className='align-self-center'>
                            <h5>{book.title}</h5>
                            <hr/>
                            <div className='mb-3'>저자: {book.authors}</div>
                            <div className='mb-3'>가격: {parseInt(book.price).toLocaleString()}원</div>
                            <div className='mb-3'>출판사: {book.publisher}</div>
                            <div className='mb-3'>ISBN: {book.isbn}</div>
                            <div className='mb-3'>날짜: {book.datetime.substr(0, 10)}</div>
                            <div className='mb-3'>상태: {book.status}</div>
                        </Col>
                    </Row>
                    <hr/>
                    <div style={{whiteSpace:'pre-wrap'}}>{book.contents || '내용없음'}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default BookModal