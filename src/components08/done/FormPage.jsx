//리액트 부트스트랩->Components->Forms
//Col 레이아웃 디자인 xs={12} md={10} lg={9} xs={8}
import React, { useContext, useRef, useState } from 'react'
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import '../Style08.css'
import { ModalContext } from '../context/ModalContext'

const initForm = {
    id:'blue',
    pass:'1234',
    name:'홍길동',
    intro:'저는 초보 개발자입니다.'
}

const FormPage = () => {
    const [form, setForm] = useState(initForm);
    const { id, pass, name, intro } = form;
    const formRef = useRef(initForm);
    const { setAlert, setConfirm } = useContext(ModalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if(id===''){
            setAlert({show:true, message:'아이디를 입력하세요!'});
        }else{
            setConfirm({
                show:'true',
                message:'정말로 가입하실래요?',
                action:()=>{
                    console.log(form);
                }
            });
        }
    }

    const onReset = (e) => {
        e.preventDefault();
        setConfirm({
            show:'true',
            message:'정말로 취소하실래요?',
            action:()=>{
                setForm(formRef.current);
                console.log(form);
            }
        });
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    return (
        <div>
            <h1 className='text-center my-5'>회원가입</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={9} xl={8}>
                    <Form onSubmit={onSubmit} onReset={onReset}>
                        <InputGroup className='mb-2'>
                            <InputGroup.Text>아이디</InputGroup.Text>
                            <Form.Control value={id} onChange={onChange}
                                name='id' placeholder='아이디'/>
                        </InputGroup>
                        <InputGroup className='mb-2'>
                            <InputGroup.Text>비밀번호</InputGroup.Text>
                            <Form.Control value={pass} onChange={onChange}
                                name='password' type='password' placeholder='비밀번호'/>
                        </InputGroup>
                        <InputGroup className='mb-2'>
                            <InputGroup.Text>이름</InputGroup.Text>
                            <Form.Control value={name} onChange={onChange}
                                name='name' placeholder='이름'/>
                        </InputGroup>
                        <Form.Control value={intro} onChange={onChange}
                            name='intro' placeholder='자기소개' as='textarea' rows={5}/>
                        <div className='text-center mt-3'>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(formRef.current)} 
                                type='submit' className='px-3 me-2'>가입</Button>
                            <Button disabled={JSON.stringify(form)===JSON.stringify(formRef.current)} 
                                type='reset' className='px-3' variant='secondary'>취소</Button>
                        </div>                                       
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default FormPage