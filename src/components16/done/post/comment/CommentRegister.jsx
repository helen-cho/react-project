import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize'
import { ModalContext } from '../../../context/ModalContext'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { app } from '../../../initFirebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const CommentRegister = ({postId}) => {
    const email = sessionStorage.getItem('email');
    const navi = useNavigate();

    const [content, setContent] = useState('');
    const db = getFirestore(app);
    const onRegister = async() => {
        const data = {postId, content, email, date:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}
        await addDoc(collection(db, 'comments'), data);
        setContent('');
    }

    return (
        <div className='my-5'>
            {email ?
                <div>
                    <TextareaAutosize value={content} onChange={(e)=>setContent(e.target.value)} 
                        placeholder='댓글 내용을 입력하세요.' className='textarea' minRows={5}/>
                    <Button onClick={onRegister} disabled={content===''} className='px-5'>등록</Button>
                </div>
                :
                <div>
                    <Button onClick={()=>navi('/login')} className='w-100' variant='outline-primary'>댓글쓰기(로그인)</Button>
                </div>
            }
        </div>
    )
}
export default CommentRegister