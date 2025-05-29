import { Row, Col, Button, Form } from 'react-bootstrap'
import { app } from '../../firebase'
import { getFirestore, collection, query, orderBy, where, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const ReplyList = ({pid}) => {
    const login = sessionStorage.getItem('email');
    const db = getFirestore(app);
    const [list, setList] = useState([]);

    const getList = () => {
        const q = query(collection(db, 'reply'), where('pid','==',pid), orderBy('date','desc'));
        onSnapshot(q, snapshot=> {
            let rows=[];
            snapshot.forEach(row=>{
                rows.push({id:row.id, ...row.data()});
            });
            const data = rows.map(row=>row && {...row, ellipsis:true, edit:false, text:row.contents});
            console.log(data)
            setList(data);
        })
    }

    useEffect(()=>{
        getList();
    }, []);

    const onClickContents = (id) => {
        const data = list.map(reply=>reply.id===id ? {...reply, ellipsis:!reply.ellipsis}: reply);
        setList(data);
    }

    const onClickUpdate = (id) => {
        const data = list.map(reply=>reply.id===id ? {...reply, edit:!reply.edit} : reply);
        console.log(id);
        setList(data);
    }

    const onChangeContents = (id, e)=> {
        const data = list.map(reply=> reply.id===id ? {...reply, contents:e.target.value}: reply);
        setList(data);
    }

    const onClickCancel = (r) => {
        const data = list.map(reply=>reply.id===r.id ? {...reply, edit:false, contents:reply.text} : reply);
        setList(data);
    }

    return (
        <Row className='justify-content-center'>
            <Col md={10}>
                {list.map(reply=>
                    <div key={reply.id} className='my-5'>
                        <Row>
                            <Col className='text-muted'>
                                {reply.date}:{reply.email}
                            </Col>
                            {reply.email === login && !reply.edit &&
                                <Col className='text-end'>
                                    <CiEdit onClick={()=>onClickUpdate(reply.id)} className='edit'/>
                                    <MdDeleteOutline className='delete'/>
                                </Col>
                            }
                        </Row>
                        {reply.edit ? 
                            <Form>
                                <TextareaAutosize className='textarea'
                                    onChange={(e)=>onChangeContents(reply.id, e)}
                                    value={reply.contents}/>  
                                <div className='text-end'>
                                    <Button size='sm' variant='primary' className='mx-2' 
                                        disabled={reply.text===reply.contents}>저장</Button>
                                    <Button onClick={()=>onClickCancel(reply)} 
                                        size='sm' variant='secondary'>취소</Button>
                                </div>      
                            </Form>
                            :
                            <div onClick={()=>onClickContents(reply.id)} style={{cursor:'pointer'}}
                                className={reply.ellipsis ? 'ellipsis' : ''}>
                                    <p style={{whiteSpace:'pre-wrap'}}>{reply.contents}</p>
                            </div>
                        }
                    </div>
                )}
            </Col>
        </Row>
    )
}

export default ReplyList
