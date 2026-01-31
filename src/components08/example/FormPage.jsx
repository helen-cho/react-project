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
    }

    const onReset = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    return (
        <div>
            <h1>회원가입</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={9} xl={8}>
                </Col>
            </Row>
        </div>
    )
}
export default FormPage