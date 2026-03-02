//posts collection 목록을 출력한다.(날짜 내림차순)
//페이징 처리를 한다.
import React, { useEffect, useState, useRef } from 'react'
import { Button,  Table} from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { app } from '../../initFirebase'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import PagingButton from '../../common/PagingButton'

const ListPage = () => {
    const navi = useNavigate();
    
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>게시글</h1>
            <div className='text-end'>
                <Button className='px-5'>새글작성</Button>
            </div>
        </div>
    )
}
export default ListPage