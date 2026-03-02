import React, { useContext, useEffect, useReducer, useState } from 'react'
import { app } from '../../../initFirebase'
import { getFirestore, collection, query, orderBy, where, onSnapshot, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { Row, Col, Button} from 'react-bootstrap'
import TextareaAutosize from 'react-textarea-autosize'
import { ModalContext } from '../../../context/ModalContext'

const reducer = (comments, action) => {
    switch(action.type){
        case 'call':
            return action.rows.map(row=>row && {...row, isEllipsis:true, isEdit:false, text:row.content});
        case 'ellipsis':
            return comments.map(c=>c.id===action.id ? {...c, isEllipsis:!c.isEllipsis}: c);
        case 'edit':
            return comments.map(c=>c.id===action.id ? {...c, isEdit:true}: c);
        case 'change':
            return comments.map(c=>c.id===action.id ? {...c, content:action.value}: c);
        case 'cancel':
            return comments.map(c=>c.id===action.id ? {...c, isEdit:false, content:c.text}: c);
        default:
            return comments;
    }
}

const CommentList = ({postId}) => {
    const email = sessionStorage.getItem('email');
    const { setConfirm } = useContext(ModalContext);
    const [comments, dispatch] = useReducer(reducer, []);

    const db = getFirestore(app);
    const callAPI = () => {
        const q=query(collection(db, 'comments'), where('postId','==',postId), orderBy('date','desc'));
        onSnapshot(q, snapshot=>{
            const rows=[];
            snapshot.docs.forEach(row=>{
                rows.push({id:row.id, ...row.data()});
            });
            console.log(rows);
            dispatch({type:'call', rows});
        })
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onRemove = (id) => {
        setConfirm({
            show:true,
            message:'정말로 삭제하실요?',
            action:async()=>{
                await deleteDoc(doc(db, 'comments', id));
            }
        });
    }

    const onSave = (comment) => {
        setConfirm({
            show:true,
            message:'정말로 수정하실래요?',
            action:async()=>{
                const {id, content, email, date} = comment;
                await setDoc(doc(db, 'comments', id), {postId, content, email, date})
            }
        })
    }
    return (
        <div>
            {comments.map(comment=>
                <div className='comment'>
                    <Row>
                        <Col className='email'>{comment.email} | {comment.date}</Col>
                        {!comment.isEdit && comment.email===email &&
                        <Col className='text-end'>
                            <Button onClick={()=>dispatch({type:'edit', id:comment.id})} variant='link' size='sm'>수정</Button>
                            <Button onClick={()=>onRemove(comment.id)} variant='link' size='sm'>삭제</Button>
                        </Col>}
                    </Row>
                    {!comment.isEdit &&
                    <div onClick={()=>dispatch({type:'ellipsis', id:comment.id})} className={`content ${comment.isEllipsis && 'text-truncate'}`}>
                        {comment.content}
                    </div>}
                    {comment.isEdit &&
                    <div>
                        <TextareaAutosize onChange={(e)=>dispatch({type:'change', id:comment.id, value:e.target.value})} value={comment.content} className='textarea' minRows={5}/>
                        <div className='text-end'>
                            <Button onClick={()=>onSave(comment)} size='sm' className='me-2'>저장</Button>
                            <Button onClick={()=>dispatch({type:'cancel', id:comment.id})} size='sm' variant='secondary'>취소</Button>
                        </div>
                    </div>}
                </div>
            )}
        </div>
    )
}
export default CommentList