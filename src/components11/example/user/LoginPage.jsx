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

    return (
        <Row className='my-5 justify-content-center'>
            <Col xs={8} md={6} lg={5} xl={4} className='my-5'>
                <Card>
                    <Card.Header>
                        <h3 className='text-center'>로그인</h3>
                    </Card.Header>
                    <Card.Body>
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