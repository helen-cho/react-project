import { useState } from 'react'
import { Card, Col, Form, Row, Button } from 'react-bootstrap'
import { app } from '../../firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
    const nav = useNavigate();
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email:'green@inha.com',
        pass: '12341234'
    })
    const {email, pass} = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(window.confirm('정말로 회원 가입하실래요?')){
            setLoading(true)
            createUserWithEmailAndPassword(auth, email, pass)
            .then(success=>{
                setLoading(false)
                alert('회원가입성공!');
                nav('/login');
            })
            .catch(error=>{
                setLoading(false);
                alert('회원가입에러:' + error.message);
            })
        }
    }

    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>
    return (
        <div>
            <Row className='my-5 text-center justify-content-center'>
                <Col lg={4} md={6} xs={6}>
                    <Card>
                        <Card.Header>
                            <h5 className='mt-2'>회원가입</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Control className='mb-2'
                                    name='email' value={email} onChange={onChange}/>
                                <Form.Control className='mb-2' type='password'
                                    name='pass' value={pass} onChange={onChange}/>
                                <Button className='w-100' type='submit'>회원가입</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default JoinPage
