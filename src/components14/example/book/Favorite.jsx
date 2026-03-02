//즐겨찾기에 등록하기(로그인되지 않은 경우 로그인 페이지로 이동)
//즐겨찾기에 등록된경우 채워진 하트, 등록되지 않은 경우 빈하트
//즐겨찾기에서 삭제하기
import React, { useContext, useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { app } from '../../initFirebase'
import { getDatabase, ref, set, onValue, remove } from 'firebase/database'
import { useNavigate } from 'react-router';
import { ModalContext } from '../../context/ModalContext';

const Favorite = ({book}) => {
    const navi = useNavigate();
    const { setAlert } = useContext(ModalContext);
    const [isFavorite, setIsFavorite] = useState(false);

    const db = getDatabase(app);
    const uid = sessionStorage.getItem('uid');
    const onRegister = async()=> {
        if(uid){
            await set(ref(db, `/favorite/${uid}/${book.isbn}`), book);
            setAlert({show:true, message:'즐겨찾기에 등록되었습니다.'})
        }else{
            navi('/login');
        }
    }

    useEffect(()=>{
        onValue(ref(db, `favorite/${uid}/${book.isbn}`), snapshop=>{
            if(snapshop.exists()){
                setIsFavorite(true);
            }else{
                setIsFavorite(false);
            }
        })
    }, []);

    const onRemove = async() => {
        await remove(ref(db, `/favorite/${uid}/${book.isbn}`));
        setAlert({show:true, message:'즐겨찾기에서 삭제되었습니다.'})
    }

    return (
        <div className='position-absolute top-0 end-0 me-2 icon-heart'>
            {isFavorite ?
                <FaHeart onClick={onRemove}/>
                :
                <FaRegHeart onClick={onRegister}/>
            }
        </div>
    )
}

export default Favorite
