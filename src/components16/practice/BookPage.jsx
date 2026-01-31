//1. Card.Body className='position-relative'로 지정
//2. Favorite 컴포넌트를 등록
//-------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import SearchForm from '../common/SearchForm'
import BookModal from './book/BookModal'
import Favorite from './book/Favorite'
import PaginationButton from '../common/PaginationButton'

const BookPage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [search] = useSearchParams();
    const size=12;
    const query=search.get('query') || '리액트';
    const page=parseInt(search.get('page')) || 1;

    const callAPI = async() => {
        setLoading(true);
        const url = 'https://dapi.kakao.com/v3/search/book?target=title';
        const config = {
            headers:{'Authorization':`KakaoAK ${process.env.REACT_APP_KAKAOAK}`},
            params:{size, query, page}
        }
        const res = await axios(url, config);
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    }, [query, page]);

    if(loading || !response) return <h1 className='text-center my-5'>로딩중....</h1>
    const {documents, meta} = response;
    const last = Math.ceil(meta.pageable_count/size);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>도서검색</h1>
            <SearchForm query={query}/>
            <Row>
                {documents.map((book, index)=>
                    <Col key={index} xs={6} md={4} lg={3} xl={2} className='mb-3'>
                        <Card>
                            <Card.Body className='position-relative'>
                                <Favorite book={book}/>
                                <BookModal book={book}/>
                            </Card.Body>
                            <Card.Footer>
                                <div className='title text-truncate'>
                                    {(page-1) * size + index + 1}.
                                    {book.title}
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            {documents.length===0 && <h3 className='text-center my-5'>검색 결과가 없습니다.</h3>}
            {last > 1 && <PaginationButton page={page} last={last} query={query}/>}
        </div>
    );
}
export default BookPage