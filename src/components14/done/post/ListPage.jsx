//posts collection 목록을 출력한다.(날짜 내림차순)
//페이징 처리를 한다.
import React, { useEffect, useState, useRef } from 'react'
import { Button,  Table} from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { app } from '../../initFirebase'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import PagingButton from '../../common/PagingButton'

const ListPage = () => {
    const navi = useNavigate();
    const db = getFirestore(app);
    const [response, setResponse] = useState(null);

    const [search] = useSearchParams();
    const page = parseInt(search.get('page')) || 1;
    const size = 5;

    const onClickRegister = () => {
        if(!sessionStorage.getItem('email')){
            navi('/login');
        }else{
            navi('/post/register')
        }
    }

    const callAPI = () => {
        const q=query(collection(db, 'posts'), orderBy('date', 'desc'));
        onSnapshot(q, snapshot=>{
            const rows=[];
            snapshot.docs.forEach((row,index)=>{
                rows.push({index, id:row.id, ...row.data()});
            });
            console.log(rows);
            const start = (page-1) * size;
            const end = page * size -1;
            const data = rows.filter(row=>row.index>=start && row.index<=end);
            setResponse({posts:data, total:rows.length});
        })
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    if(!response) return <h3 className='text-center my-5'>로딩중...</h3>
    const {posts, total} = response;
    const last = Math.ceil(total/size);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>게시글</h1>
            <div className='text-end'>
                <Button onClick={onClickRegister} className='px-5'>새글작성</Button>
            </div>
            <Table className='mt-5'>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>제목</td>
                        <td>이메일</td>
                        <td>날짜</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>
                        <tr key={post.id}>
                            <td>{post.index+1}</td>
                            <td>{post.title}</td>
                            <td>{post.email}</td>
                            <td>{post.date}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {last > 1 && <PagingButton page={page} last={last}/>}
        </div>
    )
}
export default ListPage