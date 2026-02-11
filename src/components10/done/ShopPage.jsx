//MainRouter에 등록
//도서 검색, 페이징 기능을 작성
//BookModal 도서정보 출력 기능을 작성하여 연결
//html출력:dangerouslySetInnerHTML={{__html:shop.title}}
//-----------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../common/SearchForm'
import PagingButton from '../common/PagingButton'
import ShopModal from './shop/ShopModal'

const ShopPage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const [search] = useSearchParams();
    const size=12;
    const query = search.get('query') || '노트북';
    const page = parseInt(search.get('page')) || 1;

    const callAPI = async() => {
        setLoading(true);
        const url = '/search/shop.json';
        const config = {
            headers:{
                'X-Naver-Client-Id':process.env.REACT_APP_NAVERID,
                'X-Naver-Client-Secret':process.env.REACT_APP_NAVERSECRET
            },
            params:{start:(page-1)*size+1, query:query, display:size}
        }
        const res = await axios(url, config);
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    }, [query, page]);

    if(loading || !response) return <h1 className='text-center my-5'>로딩중...</h1>
    const { items, total } = response;
    const last = Math.ceil(total/size);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>상품검색</h1>
            <SearchForm query={query}/>
            <Row>
                { items.map(shop=>
                    <Col  key={shop.productId} xs={6} md={4} lg={3} xl={2} className='mb-3'>
                        <Card>
                            <Card.Body>
                                <ShopModal shop={shop}/>
                            </Card.Body>
                            <Card.Footer>
                                <div className='text-truncate title' dangerouslySetInnerHTML={{__html:shop.title}}/>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            {items.length===0 && <h3 className='text-center my-5'>검색 결과가 없습니다.</h3>}
            {last > 1 && <PagingButton page={page} last={last} query={query}/>}
        </div>
    )
}
export default ShopPage