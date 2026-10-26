//type을 parameter로, id는 query로 받아 해당 데이터를 불러온다.
//--------------------------------------------------------
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

const JSONPage = () => {
    const [response, setResponse] = useState(null);
    const {type} = useParams();
    const [search] = useSearchParams();
    const id = parseInt(search.get('id')) || 1;
    const navi = useNavigate();
    
    const page = parseInt(search.get('page')) || 1;
    const size= 10;
    const [list, setList] = useState([]);
    const last = useRef(1);

    const callAPI = () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setResponse(json);
                const start = (page-1) * size + 1;
                const end = (page * size);
                const data = json.filter(item=>item.id>=start && item.id<=end);
                setList(data);
                last.current = Math.ceil(json.length/size);
            })
    }

    useEffect(() => {
        callAPI();
    }, [type, page]);

    return (
        <div className='json'>
            <h5 className='text-center'>{type} List</h5>
            <Table bordered striped hover variant='dark'>
                <tbody>
                    {list.map(item=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className='text-center'>
                <Button variant='success' size='sm' disabled={page===1} 
                    onClick={()=>navi(`/json/${type}?page=${page-1}`)}>
                    이전
                </Button>
                <span>{page}/{last.current}</span>
                <Button variant='success' size='sm' disabled={page == last.current} 
                    onClick={()=>navi(`/json/${type}?page=${page+1}`)}>
                    다음
                </Button>
            </div>
        </div>
    )
}
export default JSONPage