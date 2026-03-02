//MainRouter에 등록한다.
//목록을 출력하고 삭제기능을 추가한다.
import React, { useContext, useEffect, useState } from 'react'
import { app } from '../../initFirebase'
import { getDatabase, ref, onValue, remove } from 'firebase/database'
import { Button, Table } from 'react-bootstrap'
import { ModalContext } from '../../context/ModalContext'

const FavoritePage = () => {
    const [loading, setLoading] = useState(false);
    const { setConfirm } = useContext(ModalContext);

    const uid = sessionStorage.getItem('uid');
    const db = getDatabase(app);
    const [books, setBooks] = useState([]);

    const callAPI = () => {
        setLoading(true);
        onValue(ref(db, `/favorite/${uid}`), snapshot=>{
            const rows=[];
            snapshot.forEach(row=>{
                rows.push({key:row.key, ...row.val()});
            });
            console.log(rows);
            setBooks(rows);
            setLoading(false);
        })
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onRemove = (book) => {
        setConfirm({
            show:true,
            message:`${book.title} 도서를 삭제하실래요?`,
            action:()=>{
                remove(ref(db, `/favorite/${uid}/${book.key}`));
            }
        })
    }

    if(loading) return <h3 className='text-center my-5'>로딩중...</h3>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>즐겨찾기</h1>
            <Table bordered striped hover>
                <thead>
                    <tr className='text-center'>
                        <td>No.</td>
                        <td>제목</td>
                        <td>저자</td>
                        <td>가격</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index)=>
                        <tr key={index}>
                            <td className='text-center'>{index+1}</td>
                            <td>{book.title}</td>
                            <td>{book.authors}</td>
                            <td className='text-end'>{parseInt(book.sale_price).toLocaleString()}원</td>
                            <td><Button onClick={()=>onRemove(book)} variant='outline-danger' size='sm'>삭제</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default FavoritePage