//마운트시 포커스를 검색어 입력상자로 이동
import { useEffect, useState, useRef } from 'react';
import { Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';

const SearchForm = ({query}) => {
    const { pathname } = useLocation();
    const navi=useNavigate();
    const textRef = useRef(null);

    const [text, setText] = useState(query);
    const onSubmit = (e)=> {
        e.preventDefault();
        navi(`${pathname}?query=${text}&page=1`);
    }

    useEffect(()=>{
        textRef.current.focus();
    }, []);

    return (
        <Row className='mb-2'>
            <Col xs={6} md={5} lg={4} xl={3}>
                <Form onSubmit={onSubmit}>
                    <InputGroup>
                        <Form.Control ref={textRef} value={text} onChange={(e)=>setText(e.target.value)} placeholder='검색어'/>
                        <Button type='submit'>검색</Button>
                    </InputGroup>
                </Form>
            </Col>
        </Row>
    )
}
export default SearchForm