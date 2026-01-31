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

    return (
        <Row className='my-5 justify-content-center'>
            <Col xs={8} md={6} lg={5} xl={4} className='my-5'>
                <Card>
                    <Card.Header>
                        <h3 className='text-center'>회원가입</h3>
                    </Card.Header>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default JoinPage