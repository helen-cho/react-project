//제목과 내용이 입력된 경우에만 저장가능
//moment 날짜포맷을 지정함수: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
//MenuBar에서 pathname.startsWith('/post')인 경우 className='active'로변경
import React, { useContext, useRef, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext'
import { app } from '../../initFirebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

const initForm = {
    title:'리액트란 무엇인가?',
    body:'리액트(React)는 페이스북(현 메타)에서 개발한 사용자 인터페이스(UI) 구축을 위한 자바스크립트 라이브러리입니다. 컴포넌트 단위의 재사용 가능한 코드를 사용하여 복잡한 화면을 효율적으로 구성하며, 가상 DOM을 이용해 빠른 화면 렌더링을 제공하여 단일 페이지 애플리케이션(SPA) 개발에 주로 사용됩니다.'
}
const RegisterPage = () => {
    const { setAlert, setConfirm } = useContext(ModalContext);
    const navi = useNavigate();
    
    const [form, setForm] = useState(initForm);
    const {title, body} = form;
    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const db=getFirestore(app);

    const onSubmit = async(e) => {
        e.preventDefault();
        const data = {
            title,
            body,
            email:sessionStorage.getItem('email'),
            date:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        };
        await addDoc(collection(db, 'posts'), data);
        navi('/post');
    }

    const onReset = (e) => {
        setConfirm({
            show:true,
            message:'정말로 취소하실래요?',
            action:()=>{
                setForm(initForm);
            }
        })
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
                            <Button disabled={title===''} type='submit' className='px-5 me-2'>등록</Button>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(initForm)}type='reset' className='px-5' variant='secondary'>취소</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterPage