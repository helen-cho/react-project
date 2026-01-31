//MainRouter에 등록
//도서 검색, 페이징 기능을 작성
//BookModal 도서정보 출력 기능을 작성하여 연결
//html출력:dangerouslySetInnerHTML={{__html:shop.title}}
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../common/SearchForm'
import PagingButton from '../common/PagingButton'
import ShopModal from './shop/ShopModal'

const ShopPage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const size=12;
    const query = '노트북';
    const page = 1;

    const callAPI = async() => {
        setLoading(true);
        const url = '/search/shop.json';
        const config = {
            headers:{
                'X-Naver-Client-Id':process.env.REACT_APP_NAVERID,
                'X-Naver-Client-Secret':process.env.REACT_APP_NAVERSECRET
            },
            params:{start:1, query, display:size}
        }
        const res = await axios(url, config);
        console.log(res.data);
        setLoading(false);
    }


    if(loading) return <h1 className='text-center my-5'>로딩중...</h1>

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>상품검색</h1>
        </div>
    )
}
export default ShopPage