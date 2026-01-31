import React, { useContext, useEffect, useReducer, useState } from 'react'
import { app } from '../../../initFirebase'
import { getFirestore, collection, query, orderBy, where, onSnapshot, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { Row, Col, Button} from 'react-bootstrap'
import TextareaAutosize from 'react-textarea-autosize'
import { ModalContext } from '../../../context/ModalContext'

const reducer = (comments, action) => {
    switch(action.type){
        case 'call':
            return action.rows.map((row, index)=>row && {...row, index, isEllipsis:true, isEdit:false, text:row.content});
        case 'ellipsis':
            return comments.map(c=>c.id===action.comment.id ? {...c, isEllipsis:!c.isEllipsis}: c);
        case 'edit':
            return comments.map(c=>c.id===action.comment.id ? {...c, isEdit:true} : c);
        case 'change':
            return comments.map(c=>c.id===action.comment.id ? {...c, content:action.value} : c);
        case 'cancel':
            return comments.map(c=>c.id===action.comment.id ? {...c, isEdit:false, content:c.text} : c);
        default:
            return comments;
    }
}

const CommentList = ({postId}) => {
    const db =getFirestore(app);
    const [loading, setLoading] = useState(false);
    const { setConfirm } = useContext(ModalContext);
    const [comments, dispatch] = useReducer(reducer, []);
    //const [comments, setComments] = useState([]);
    const callAPI = () => {
        setLoading(true);
        const q=query(collection(db,'comments'),where('postId','==',postId ),orderBy('date','desc'));
        onSnapshot(q, snapshot=>{
            const rows=[];
            snapshot.docs.forEach(row=>{
                rows.push({id:row.id, ...row.data()});
            });
            console.log(rows);
            dispatch({type:'call', rows});
        });
        setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onClickDelete = (comment)=> {
        setConfirm({
            show:true,
            message:`${comment.id}번 댓글을 삭제하실래요?`,
            action:async()=>{
                await deleteDoc(doc(db, 'comments', comment.id));
            }
        });
    }

    const onSave = async(comment)=> {
        await setDoc(doc(db, 'comments', comment.id), comment);
    }

    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>
    return (
        <div>
            {comments.map((comment,index)=>
                <div className='comment'>
                    <Row className='mb-1'>
                        <Col className='email mt-2'>{comment.email} | {comment.date}</Col>
                        {/*편집상태가 아니면서 내가 쓴 댓글인 경우만 보이기*/}
                        {!comment.isEdit && comment.email===sessionStorage.getItem('email') &&
                        <Col className='text-end'>
                            <Button onClick={()=>dispatch({type:'edit', comment})} size='sm' variant='link'>수정</Button>
                            <Button onClick={()=>onClickDelete(comment)} size='sm' variant='link'>삭제</Button>
                        </Col>
                        }
                    </Row>
                    {/*편집상태가 아닌 경우에만 보이기 content 내용은 Ellipsis Toggle*/}
                    {!comment.isEdit &&
                    <div onClick={()=>dispatch({type:'ellipsis', comment})} className={`content ${comment.isEllipsis && 'text-truncate'}`}>
                        {index+1}. {comment.content}
                    </div>
                    }
                    {/*편집상태인 경우에만 보이기*/}
                    {comment.isEdit &&
                    <div>
                        <TextareaAutosize onChange={(e)=>dispatch({type:'change', comment, value:e.target.value})}
                            value={comment.content} className='textarea' minRows={3}/>
                        <div className='text-end'>
                            <Button onClick={()=>onSave(comment)} 
                                disabled={comment.text===comment.content} className='me-2' size='sm'>저장</Button>
                            <Button onClick={()=>dispatch({type:'cancel', comment})} 
                                size='sm' variant='secondary'>취소</Button>
                        </div>
                    </div>
                    }
                </div>
            )} 
        </div>
    )
}
export default CommentList