//1. 제목과 내용이 입력된 경우에만 저장가능
//2. moment 날짜포맷을 지정함수: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
//3. MenuBar에서 pathname.startsWith('/post')인 경우 className='active'로변경
//--------------------------------------------------------------------------
import React, { useContext, useRef, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext'
import { app } from '../../initFirebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

const RegisterPage = () => {
    const { setAlert, setConfirm } = useContext(ModalContext);
    const navi = useNavigate();
    const db = getFirestore(app);

    const [form, setForm] = useState({
        title:'',
        body:''
    });
    const formRef = useRef(form);
    const { title, body } = form;
    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if(title===''){
            setAlert({show:true, message:'제목을 입력하세요.'});
        }else if(body===''){
            setAlert({show:true, message:'내용을 입력하세요.'});
        }else{
            const post = {
                ...form,
                email:sessionStorage.getItem('email'),
                date:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            }
            await addDoc(collection(db, 'posts'), post);
            navi('/post');
        }
    }

    const onReset = (e) => {
        setConfirm({
            show:true,
            message:'정말로 초기화하실래요?',
            action:()=>{
                setForm(formRef.current);
            }
        });
    }

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>글쓰기</h1>
            <Row className='justify-content-center'>
                <Col md={10} lg={9} xl={8}>
                    <Form onSubmit={onSubmit} onReset={onReset}>
                        <Form.Control value={title} onChange={onChange}
                            name='title' placeholder='제목을 입력하세요.' className='mb-3'/>
                        <Form.Control value={body} onChange={onChange}
                            name='body' placeholder='내용을 입력하세요.' className='mb-3' as='textarea' rows={10}/>
                        <div className='text-center'>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(formRef.current)}
                                type='submit' className='px-5 me-2'>등록</Button>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(formRef.current)} 
                                type='reset' className='px-5' variant='secondary'>취소</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default RegisterPage