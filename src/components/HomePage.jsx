import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

const HomePage = () => {
    const [documents, setDocuments] = useState([]);
    const [query, setQuery] = useState('리액트');
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(1);
    const callAPI = async() => {
        const url="https://dapi.kakao.com/v3/search/book?target=title"
        const config = {
            headers:{
                Authorization:"KakaoAK 7dc21d5852274d162cc3c15163505083"
            },
            params:{
                query:query,
                size:12,
                page:page
            }
        }
        const res=await axios.get(url, config);
        console.log(res);
        setDocuments(res.data.documents);
        setLast(Math.ceil(res.data.meta.pageable_count/12));
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    const onSumbit = (e)=> {
        e.preventDefault();
        if(query==='') {
            alert("검색어를 입력하세요!");
        }else{
            callAPI();
        }
    }

    return (
        <div>
            <h1 className='my-5 text-center'>홈페이지</h1>
            <Row className='mb-2'>
                <Col>
                    <Form onSubmit={onSumbit}>
                        <InputGroup>
                            <Form.Control onChange={(e)=>setQuery(e.target.value)}
                                value={query}/>
                            <Button type="submit">검색</Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                {documents.map(doc=>
                    <Col lg={2} md={3} xs={6} className='mb-2'>
                        <Card>
                            <Card.Body>
                                <img src={doc.thumbnail} width="100%"/>
                            </Card.Body>
                            <Card.Footer>
                                <div className='text-truncate'>{doc.title}</div>
                                <div>{doc.sale_price}원</div>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            <div className='text-center mt-3'>
                <Button disabled={page===1} 
                    onClick={()=>setPage(page-1)}>이전</Button>
                <span className='mx-2'>{page} / {last}</span>
                <Button disabled={page===last} 
                    onClick={()=>setPage(page+1)}>다음</Button>
            </div>
        </div>
    )
}

export default HomePage
