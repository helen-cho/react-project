import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize'
import { ModalContext } from '../../../context/ModalContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { app } from '../../../initFirebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const CommentRegister = () => {
    const navi = useNavigate();

    return (
        <div className='my-5'>
            <div>
                <TextareaAutosize placeholder='댓글 내용을 입력하세요.' className='textarea' minRows={5}/>
                <Button className='px-5'>등록</Button>
            </div>
            <div>
                <Button className='w-100' variant='outline-primary'>댓글쓰기(로그인)</Button>
            </div>
        </div>
    )
}
export default CommentRegister