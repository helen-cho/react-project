//type을 parameter로, id는 query로 받아 해당 데이터를 불러온다.
//--------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const JSONPage = () => {
    const navi = useNavigate();
    const [response, setResponse] = useState(null);

    const callAPI = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=1`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setResponse(json);
            })
    }

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <div className='json'>
            <h5>JSONPlaceHolder</h5>
            <pre>{response && JSON.stringify(response, null, 2)}</pre>
        </div>
    )
}
export default JSONPage