//posts collection 목록을 출력한다.(날짜 내림차순)
//페이징 처리를 한다.
import React, { useEffect, useState, useRef } from 'react'
import { Button,  Table} from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { app } from '../../initFirebase'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import PagingButton from '../../common/PagingButton'

const ListPage = () => {
    const db = getFirestore(app);
    const [loading, setLoading] = useState(false);
    const navi = useNavigate();
    const [posts, setPosts] = useState([]);

    const onRegister = () => {
        if(sessionStorage.getItem('uid')){
            navi('/post/register');
        }else{
            navi('/login');
        }
    }

    const [search] = useSearchParams();
    const page = parseInt(search.get('page')) || 1;
    const size = 5;
    const lastRef = useRef(1);

    const callAPI = () => {
        setLoading(true);
        const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
        onSnapshot(q, snapshot=>{
            const rows=[];
            snapshot.docs.forEach((row, index)=>{
                rows.push({seq:index+1, id:row.id, ...row.data()});
            });
            console.log(rows);
            const start = (page-1) * size + 1;
            const end = page * size;
            const data = rows.filter(post=>post.seq>=start && post.seq<=end);
            setPosts(data);
            lastRef.current = Math.ceil(rows.length/size);
            setLoading(false);
        });
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    if(loading || !posts) return <h1 className='text-center my-5'>로딩중...</h1>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>게시글</h1>
            <div className='text-end mb-5'>
                <Button onClick={onRegister} className='px-5'>새글작성</Button>
            </div>
            <Table striped hover bordered>
                <thead>
                    <tr className='text-center'>
                        <td>No.</td>
                        <td>Title</td>
                        <td>Email</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                {posts.map((post)=>
                    <tr key={post.id}>
                        <td>{post.seq}</td>
                        <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                        <td>{post.email}</td>
                        <td>{post.date}</td>
                    </tr>
                )}
                </tbody>
            </Table>
            <PagingButton page={page} last={lastRef.current}/>
        </div>
    )
}
export default ListPage