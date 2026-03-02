//장바구니 목록을 출력하고 삭제하는 기능
//-------------------------------------------------
import { useContext, useEffect, useState } from 'react';
import { app } from '../../initFirebase'
import { getFirestore, collection, query, where, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { Table, Button } from 'react-bootstrap'
import {ModalContext} from '../../context/ModalContext'

const CartPage = () => {
    const [loading, setLoading] = useState(false);
    const { setConfirm } = useContext(ModalContext);

    const uid =sessionStorage.getItem('uid');
    const db = getFirestore(app);
    const [products, setProducts] = useState([]);

    const callAPI = () => {
        setLoading(true);
        const q=query(collection(db, 'cart'), where('uid','==',uid));
        onSnapshot(q, snapshot=>{
            const rows=[];
            snapshot.docs.forEach(row=>{
                rows.push({id:row.id, ...row.data()});
            });
            console.log(rows);
            setProducts(rows);
            setLoading(false);
        })
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onRemove = (id) =>{
        setConfirm({
            show:true,
            message:`${id}번 상품을 삭제하실래요?`,
            action:async()=>{
                await deleteDoc(doc(db, 'cart', id));
            }
        });
    }

    if(loading) return <h3 className='text-center my-5'>로딩중...</h3>

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>장바구니</h1>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <td>No.</td>
                        <td>상품명</td>
                        <td>가격</td>
                        <td>제조사</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index)=>
                        <tr key={product.id}>
                            <td className='text-center'>{index+1}</td>
                            <td><div dangerouslySetInnerHTML={{__html:product.title}}/></td>
                            <td className='text-end'>{parseInt(product.lprice).toLocaleString()}원</td>
                            <td>{product.maker}</td>
                            <td><Button onClick={()=>onRemove(product.id)} variant='outline-danger' size='sm'>삭제</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default CartPage