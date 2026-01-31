import React, { useContext, useEffect, useReducer, useState } from 'react'
import { app } from '../../../initFirebase'
import { getFirestore, collection, query, orderBy, where, onSnapshot, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { Row, Col, Button} from 'react-bootstrap'
import TextareaAutosize from 'react-textarea-autosize'
import { ModalContext } from '../../../context/ModalContext'

const reducer = (comments, action) => {
    switch(action.type){
        case 'call':
        case 'ellipsis':
        case 'edit':
        case 'change':
        case 'cancel':
        default:
            return comments;
    }
}

const CommentList = ({postId}) => {
    const [loading, setLoading] = useState(false);
    const { setConfirm } = useContext(ModalContext);

    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>
    return (
        <div>
            댓글목록
        </div>
    )
}
export default CommentList