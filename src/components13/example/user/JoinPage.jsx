//MainRouter에 등록한다.
//--------------------------------------------
import React, { useContext, useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { ModalContext } from '../../context/ModalContext'
import { app } from '../../initFirebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const JoinPage = () => {
    const { setAlert } = useContext(ModalContext);
    const navi = useNavigate();
    const auth = getAuth(app);

    const [form, setForm] = useState({
        email:'blue@test.com',
        pass:'12341234'
    });
    const {email, pass} = form;
    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!email.includes('@')){
            setAlert({show:true, message:'이메일 형식에 어긋납니다.'});
        }else if(pass.length < 8) {
            setAlert({show:true, message:'비빌번호는 8자리 이상입니다.'})
        }else{
            createUserWithEmailAndPassword(auth, email, pass).then(success=>{
                navi('/');
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
                        <h3 className='text-center'>회원가입</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Control value={email} onChange={onChange} name='email' className='mb-2'/>
                            <Form.Control value={pass} onChange={onChange} name='pass' className='mb-2' type='password'/>
                            <Button className='w-100' type='submit'>회원가입</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default JoinPage