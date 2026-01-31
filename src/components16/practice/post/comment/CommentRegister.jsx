import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize'
import { ModalContext } from '../../../context/ModalContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { app } from '../../../initFirebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const CommentRegister = () => {
    return (
        <div className='my-5'>
            댓글등록
        </div>
    )
}
export default CommentRegister