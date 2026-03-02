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

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>장바구니</h1>
        </div>
    )
}
export default CartPage