import { useEffect, useState } from 'react';
import { app } from '../../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { Button, Table } from 'react-bootstrap';
import BookPage from '../BookPage';

const CartPage = () => {
    const [loading, setLoading] = useState(false);
    const db = getDatabase(app);
    const [books, setBooks] = useState([]);

    const getCart = () => {
        setLoading(true);
        const uid=sessionStorage.getItem('uid');
        onValue(ref(db, `cart/${uid}`), snapshot=>{
            let rows=[];
            snapshot.forEach(row=>{
                rows.push({key: row.key, ...row.val()});
            });
            console.log(rows);
            setBooks(rows);
            setLoading(false);
        });
    }

    useEffect(()=>{
        getCart();
    }, []);

    const onClickDelete = (book) => {
        if(window.confirm(`'${book.title}'를(을) 삭제하실래요?`)){
            const uid=sessionStorage.getItem('uid');
            remove(ref(db, `cart/${uid}/${book.isbn}`));
        }
    }

    if(loading) return <h1 className='my-5 text-center'>로딩중......</h1>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>장바구니</h1>
            <Table striped hover style={{fontSize:'12px'}}>
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <td width={50}></td>
                        <td>제목</td>
                        <td>저자</td>
                        <td>출판사</td>
                        <td>가격</td>
                        <td>등록일</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book=>
                        <tr key={book.key}>
                            <td><BookPage doc={book}/></td>
                            <td>{book.title}</td>
                            <td>{book.authors}</td>
                            <td>{book.publisher}</td>
                            <td>{book.price}원</td>
                            <td>{book.date}</td>
                            <td>
                                <Button variant='outline-danger' size='sm'
                                    onClick={()=>onClickDelete(book)}>
                                        삭제
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default CartPage
