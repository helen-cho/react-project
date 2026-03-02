import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa6'
import { app } from '../../initFirebase'
import { getFirestore, collection, query, where, getCountFromServer, addDoc } from 'firebase/firestore'
import { ModalContext } from '../../context/ModalContext'
import { useNavigate } from 'react-router-dom'

const Cart = ({shop}) => {
    const navi = useNavigate();
    const { setAlert, setConfirm } = useContext(ModalContext);

    const uid = sessionStorage.getItem('uid');
    const db = getFirestore(app);
    
    const onRegister = async() => {
        if(uid){
           const q=query(collection(db,'cart'), where('uid','==',uid), where('productId','==',shop.productId));
           const snapshot = await getCountFromServer(q);
            if(snapshot.data().count > 0){
                setAlert({show:true, message:'이미 장바구니에 있는 상품입니다.'});
            }else{
                await addDoc(collection(db, 'cart'), { uid, ...shop });
                setAlert({show:true, message:'장바구니에 등록되었습니다.'});
            }
        }else{
            navi('/login');
        }
    }

    return (
        <div className='position-absolute bottom-0 end-0  me-2 icon-cart'>
            <FaCartPlus onClick={onRegister}/>
        </div>
    )
}
export default Cart