import { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const nav = useNavigate();
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: 'red@inha.com',
        pass: '12341234'
    });

    const {email, pass} = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(email==='' || pass===''){
            alert('이메일 또는 비밀번호를 입력하세요!');
        }else{
            setLoading(true);
            signInWithEmailAndPassword(auth, email, pass)
            .then(success=>{
                setLoading(false);
                alert('로그인 성공!');
                sessionStorage.setItem('uid', success.user.uid);
                sessionStorage.setItem('email', email);
                if(sessionStorage.getItem('target')){
                    nav(sessionStorage.getItem('target'));
                }else{
                    nav('/');
                }
            })
            .catch(error=>{
                setLoading(false);
                alert('로그인 에러:' + error.message);
            })
        }
    }

    if(loading) return <h1 className='my-5 text-center'>로딩중....</h1>
    return (
        <div>
            <Row className='my-5 justify-content-center'>
                <Col lg={4} md={6} xs={8}>
                    <Card>
                        <Card.Header>
                            <h5 className='mt-2 text-center'>로그인</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Control className='mb-2' value={email}
                                    name='email' onChange={onChange}/>
                                <Form.Control className='mb-2' value={pass} type='password'
                                    name='pass' onChange={onChange}/>
                                <Button className='w-100' type='submit'>로그인</Button>
                            </Form>
                            <div className='text-end mt-2'>
                                <a href={process.env.PUBLIC_URL + '/join'}>회원가입</a>
                            </div>    
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage
