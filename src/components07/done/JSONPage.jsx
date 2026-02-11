//type을 parameter로, id는 query로 받아 해당 데이터를 불러온다.
//--------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const JSONPage = () => {
    const [response, setResponse] = useState(null);
    
    const { type } = useParams();
    const [search] = useSearchParams();
    const id = parseInt(search.get('id')) || 1;

    const navi = useNavigate();

    const callAPI = () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}?id=${id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setResponse(json);
            })
    }

    useEffect(() => {
        callAPI();
    }, [type, id]);


    return (
        <div className='json'>
            <h5>JSONPlaceHolder</h5>
            <pre>{response && JSON.stringify(response, null, 2)}</pre>
            <div>
                <button onClick={()=>navi(`/json/${type}?id=${id-1}`)} disabled={id===1}>감소</button>
                <span>{id}</span>
                <button onClick={()=>navi(`/json/${type}?id=${id+1}`)}>증가</button>
            </div>
        </div>
    )
}
export default JSONPage