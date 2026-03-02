//1. PostRouter에 등록
//2. posts collection에서 id에 해당하는 정보읽기
//3. 저장버튼 클릭시 수정하기
//4. 취소버튼 클릭시 리셋하기
//-----------------------------------------------------
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext';
import { useNavigate, useParams } from 'react-router-dom';
import { app } from '../../initFirebase'
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore';

const UpdatePage = () => {
    const { setConfirm } = useContext(ModalContext);
    const navi = useNavigate();

    const {id} = useParams();
    const db = getFirestore(app);
    
    const formRef = useRef(null);
    const [form, setForm] = useState('');
    const {title, body} = form;
    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const callAPI = async() => {
        const snapshot=await getDoc(doc(db, 'posts', id));
        console.log(snapshot.data());
        formRef.current = snapshot.data();
        setForm(snapshot.data());
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setConfirm({
            show:true,
            message:'정말로 수정하실래요?',
            action:async()=>{
                await setDoc(doc(db, 'posts', id), form);
                navi(-1);
            }
        });
    }

    const onReset = (e) => {
        e.preventDefault();
        setConfirm({
            show:true,
            message:'정말로 취소하실래요?',
            action:async()=>{
                setForm(formRef.current);
            }
        });
    }

    if(!form) return <h3 className='text-center my-5'>로딩중...</h3>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>게시글 수정</h1>
            <Row className='justify-content-center'>
                <Col md={10} lg={9} xl={8}>
                    <Form onSubmit={onSubmit} onReset={onReset}>
                        <Form.Control value={title} onChange={onChange}
                            name='title' placeholder='제목을 입력하세요.' className='mb-3'/>
                        <Form.Control value={body} onChange={onChange}
                            name='body' placeholder='내용을 입력하세요.' className='mb-3' rows={10} as='textarea'/>
                        <div className='text-center'>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(formRef.current)} type='submit' className='px-5 me-2'>저장</Button>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(formRef.current)} type='reset' className='px-5' variant='secondary'>취소</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default UpdatePage