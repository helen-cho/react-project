//type을 parameter로, id는 query로 받아 해당 데이터를 불러온다.
//--------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const JSONPage = () => {
    const navi = useNavigate();
    const { type } = useParams();
    const [response, setResponse] = useState(null);
    const [search] = useSearchParams();
    const id = parseInt(search.get('id')) || 1;

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

    const onIncrease = (id) => {
        navi(`/json/${type}?id=${id}`);
    }

    const onDecrease = (id) => {
        navi(`/json/${type}?id=${id}`)
    }

    return (
        <div className='json'>
            <h5>JSONPlaceHolder</h5>
            <pre>{response && JSON.stringify(response, null, 2)}</pre>
            <div>
                <button onClick={()=>onDecrease(id-1)} disabled={id===1}>감소</button>
                <span>{id}</span>
                <button onClick={()=>onIncrease(id+1)}>증가</button>
            </div>
        </div>
    )
}
export default JSONPage