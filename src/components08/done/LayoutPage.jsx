//리액트 부트스트랩->Components->Layout->Grid
//Col 레이아웃 디자인 xs={6},md={4},lg={3},xl={2}
import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import '../Style08.css'
import axios from 'axios'
import PageButton from './PageButton'

const LayoutPage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const lastRef = useRef(1);
    const size=12;
    
    const callAPI = async() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await axios.get(url);
        const start = (page-1) * size + 1;
        const end = page * size; 
        const data = res.data.filter(post=>post.id>=start && post.id<=end);
        setPosts(data);
        lastRef.current=Math.ceil(res.data.length/size);
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    return (
        <div>
            <h1 className='my-5 text-center'>게시글</h1>
            <Row>
                {posts.map(post=>
                    <Col key={post.id} xs={6} md={4} lg={3} xl={2} className='mb-3'>
                        <Card>
                            <Card.Body>
                                <div className='body'>{post.body}</div>
                            </Card.Body>
                            <Card.Footer>
                                <div className='title text-truncate'>{post.title}</div>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
            <PageButton page={page} setPage={setPage} last={lastRef.current}/>
        </div>
    )
}
export default LayoutPage