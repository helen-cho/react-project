//1. MainRouter에 등록한다.
//2. 로그인 성공시 MenuBar를 변경한다.
//3. success.user.email, success.user.uid, error.message
//---------------------------------------------------------------
import React, { useContext, useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router'
import { ModalContext } from '../../context/ModalContext'
import { app } from '../../initFirebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = () => {
    const { setAlert } = useContext(ModalContext);
    const navi = useNavigate();
    const auth = getAuth(app);

    const [form, setForm] = useState({
        email:'hong@test.com',
        pass:'12341234'
    })
    const {email, pass} = form;
    const onChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!email.includes('@')) {
            setAlert({show:true, message:'이메일 형식에 어긋납니다.'});
        }else if(pass.length < 8) {
            setAlert({show:true, message:'비밀번호는 8자리 이상입니다.'})
        }else{
            //로그인 체크
            signInWithEmailAndPassword(auth, email, pass).then(success=>{
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('uid', success.user.uid);
                navi(-1);
            }).catch(error=>{
                setAlert({show:true, message:error.message});
            })
        }
    }

    return (
        <Row className='my-5 justify-content-center'>
            <Col xs={7} md={6} lg={5} xl={4} className='my-5'>
                <Card>
                    <Card.Header>
                        <h3 className='text-center'>로그인</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Control name='email' value={email} onChange={onChange} className='mb-2'/>
                            <Form.Control name='pass' value={pass} onChange={onChange} type='password' className='mb-2'/>
                            <Button type='submit' className='w-100'>로그인</Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer className='text-end'>
                        <Link to ='/join'>회원가입</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
export default LoginPage