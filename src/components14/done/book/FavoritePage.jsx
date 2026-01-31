//1. MainRouter에 등록한다.
//2. 목록을 출력하고 삭제기능을 추가한다.
//----------------------------------------------
import React, { useContext, useEffect, useState } from 'react'
import { app } from '../../initFirebase'
import { getDatabase, ref, onValue, remove } from 'firebase/database'
import { Button, Table } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext'

const FavoritePage = () => {
    const db = getDatabase(app);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setConfirm } = useContext(ModalContext);

    const uid = sessionStorage.getItem('uid');
    const callAPI = () => {
        setLoading(true);
        const bookRef = `/favorite/${uid}`;
        onValue(ref(db, bookRef), snapshop=>{
            const rows=[];
            snapshop.forEach(row=>{
                rows.push({key:row.key, ...row.val()});
            });
            console.log(rows);
            setBooks(rows);
        });
        setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onRemove = (book) => {
        setConfirm({
            show:true,
            message:`'${book.title}' 도서를 삭제하실래요?`,
            action:async()=>{
                const bookRef = `/favorite/${uid}/${book.isbn}`;
                await remove(ref(db, bookRef));
            }
        });
    }

    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>즐겨찾기</h1>
            <Table hover striped bordered>
                <tbody>
                    {books.map((book, index)=>
                        <tr id={index}>
                            <td>{index+1}</td>
                            <td>{book.title}</td>
                            <td>{parseInt(book.price).toLocaleString()}원</td>
                            <td>{book.authors}</td>
                            <td><Button onClick={()=>onRemove(book)} variant='outline-danger' size='sm'>삭제</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default FavoritePage