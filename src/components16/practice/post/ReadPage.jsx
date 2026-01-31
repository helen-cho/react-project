// CommentRegister, CommentList를 [post] 폴더 ReadPage에 등록한다.
//------------------------------------------------------------------------------------
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { app } from '../../initFirebase'
import { getFirestore, doc, getDoc, deleteDoc } from 'firebase/firestore'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext'
import CommentRegister from './comment/CommentRegister'
import CommentList from './comment/CommentList'

const ReadPage = () => {
    const [loading, setLoading] = useState(false);
    const { setConfirm } = useContext(ModalContext);
    const navi = useNavigate();

    const db = getFirestore(app);
    const { id } = useParams();

    const [post, setPost] = useState('');
    const { title, body, email, date} = post;

    const callAPI = async() => {
        setLoading(true);
        const snapshot = await getDoc(doc(db, 'posts', id));
        setPost({id:snapshot.id, ...snapshot.data()});
        console.log(snapshot.id, snapshot.data());
        setLoading(false);
    }
    useEffect(()=>{
        callAPI();
    }, []);

    const onClickDelete = () => {
        setConfirm({
            show:true,
            message:`${id}번 문서를 삭제하실래요?`,
            action:async()=>{
                await deleteDoc(doc(db, 'posts', id));
                navi('/post');
            }
        });
    }

    const onClickUpdate = () => {
        navi(`/post/update/${id}`);
    }

    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>게시글 정보</h1>
            <Row className='justify-content-center'>
                <Col md={10} lg={9} xl={8}>
                    {sessionStorage.getItem('uid') &&
                        <div className='text-end mb-2'>
                            <Button onClick={onClickUpdate} className='px-3 me-2' variant='outline-primary'>수정</Button>
                            <Button onClick={onClickDelete} className='px-3' variant='outline-danger'>삭제</Button>
                        </div>
                    }
                    <Card>
                        <Card.Header>
                            <h5 className='my-2'>{title}</h5>
                        </Card.Header>
                        <Card.Body>
                            <div style={{whiteSpace:'pre-wrap'}}>{body}</div>
                        </Card.Body>
                        <Card.Footer className='text-muted'>
                            Posted on <span>{date}</span> by <span>{email}</span>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ReadPage