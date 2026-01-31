//리액트 부트스트랩->Components->Tables
import React, { useEffect, useState, useRef } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import '../Style08.css'
import PageButton from './PageButton'

const TablePage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const lastRef = useRef(1);
    const size=10;

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
            <h1 className='text-center my-5'>게시글</h1>
            <Table hover striped bordered>
                <tbody>
                    {posts.map(post=>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <PageButton page={page} setPage={setPage} last={lastRef.current}/>
        </div>
    )
}
export default TablePage