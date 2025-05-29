import moment from 'moment/moment';
import { useState, useRef } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap'
import { app } from '../../firebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import ReplyList from './ReplyList';
import TextareaAutosize from 'react-textarea-autosize';

const ReplyPage = ({ id }) => {
    const db = getFirestore(app);
    const [loading, setLoading] = useState(false);
    const email = sessionStorage.getItem('email');
    const [contents, setContents] = useState('');

    const onWrite = async () => {
        if (contents === '') {
            alert('댓글 내용을 입력하세요!')
        } else {
            const reply = {
                pid: id,
                contents,
                email,
                date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            }
            setLoading(true);
            await addDoc(collection(db, 'reply'), reply);
            setLoading(false);
        }
    }

    if (loading) return <h1 className='my-5 text-center'>로딩중......</h1>
    return (
        <>
            <Row className='justify-content-center my-5'>
                <Col md={10} >
                    {email ?
                        <div>
                            <Form>
                                <TextareaAutosize 
                                    onChange = {(e)=>setContents(e.target.value)}
                                    className='textarea' placeholder='내용을 입력하세요.'/>
                                <Button onClick={onWrite} className='px-5 mt-2'>등록</Button>
                            </Form>
                        </div>
                        :
                        <div className='tex-end'>
                            <Button className='w-100'>로그인</Button>
                        </div>
                    }
                </Col>
            </Row>
            <ReplyList pid={id}/>
        </>
    )
}

export default ReplyPage
