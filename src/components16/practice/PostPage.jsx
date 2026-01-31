import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import PaginationButton from '../common/PaginationButton'
import '../Style.css'
import { Rating } from 'react-simple-star-rating'
import RatingModal from './RatingModal'
import Loading from './Loading'

const PostPage = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    const [search] = useSearchParams();
    const page =parseInt(search.get('page')) || 1;
    const limit = 12;

    const callAPI = async() => {
        setLoading(true);
        const skip = (page-1) * limit; 
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const json = await res.json();
        setResponse(json);
        //setTimeout(()=>{ setLoading(false) }, 2000)
        setLoading(false); 
    }

    useEffect(()=>{
        callAPI()
    }, [page]);

    if(loading || !response) return <Loading/>
    const { products, total } = response;
    const last = Math.ceil(total/12);

    return (
        <Row className='p-5'>
            <h1 className='text-center mb-5'>상품목록</h1>
            { products.map(product=>
                <Col key={product.id} xs={6} md={4} lg={3} xl={2} className='mb-3'>
                    <Card>
                        <Card.Img variant='top' src={product.thumbnail}/>
                        <Card.Body>
                            <Card.Text className='ellipsis-3'>
                                {product.id}. {product.title}
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Rating initialValue={product.rating} size={20} readonly={true}
                                allowFraction={true} fillColor='orange' emptyColor='#EEEEEE'/>
                            <RatingModal product={ product }/>
                        </Card.Footer>
                    </Card>
                </Col>
            )}
            <PaginationButton page={page} last={last} query=''/>
        </Row>
    )
}
export default PostPage