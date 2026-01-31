//1. MainRouter에 BookPage를 Route로 등록
//2. API 결과 출력 (index, title, thumbnail)
//3. SearchForm 검색기능 (documents.length가 0이면 '검색 결과가 없습니다.' 메지지 출력)
//4. 마지막 페이지가 1보다 큰 경우에만 PagingButton 컴포넌트 보이기
//-------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
import SearchForm from './common/SearchForm';
import PagingButton from './common/PagingButton'

const BookPage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const size=12;
    const query='리액트';
    const page=1;

    const callAPI = async() => {
        setLoading(true);
        const url = 'https://dapi.kakao.com/v3/search/book?target=title';
        const config = {
            headers:{'Authorization':`KakaoAK ${process.env.REACT_APP_KAKAOAK}`},
            params:{size, query, page}
        }
        const res = await axios(url, config);
        console.log(res.data);
        setLoading(false);
    }


    if(loading) return <h1 className='text-center my-5'>로딩중....</h1>

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>도서검색</h1>
        </div>
    );
}
export default BookPage