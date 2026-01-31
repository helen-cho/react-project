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

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>즐겨찾기</h1>
        </div>
    )
}

export default FavoritePage
