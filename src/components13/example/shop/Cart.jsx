import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa6'
import { app } from '../../initFirebase'
import { getFirestore, collection, query, where, getCountFromServer, addDoc } from 'firebase/firestore'
import { ModalContext } from '../../context/ModalContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navi = useNavigate();
    const { setAlert } = useContext(ModalContext);

    return (
        <div className='position-absolute bottom-0 end-0  me-1 icon-cart'>
            
        </div>
    )
}
export default Cart