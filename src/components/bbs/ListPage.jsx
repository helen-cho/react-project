import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const ListPage = () => {
    const basename = process.env.PUBLIC_URL;
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(1);
    const [list, setList] = useState([]);
    const db = getFirestore(app);
    const email = sessionStorage.getItem('email');
    const nav = useNavigate();

    const getList = () => {
        setLoading(true);
        const q = query(collection(db, 'bbs'), orderBy('date', 'desc'));
        const rows = [];
        let no=0;
        onSnapshot(q, snapshot=>{
            snapshot.forEach(row=>{
                no = no + 1;
                const start = (page-1) * 5 + 1;
                const end = (page*5);
                if(no>=start && no<=end){
                    rows.push({no, id:row.id, ...row.data()});
                }
            });
            setList(rows);
            setLast(Math.ceil(no/5));
            setLoading(false);
        });
    }

    useEffect(()=>{
        getList();
    }, [page]);

    const onClickWrite = () => {
        if(email){
            nav('/bbs/write');
        }else{
            sessionStorage.setItem('target', '/bbs/write');
            nav('/login');
        }
    }

    if(loading) return <h1 className='my-5 text-center'>로딩중......</h1>
    return (
        <div>
            <h1 className='my-5 text-center'>게시글</h1>
            <div className='my-3'>
                <Button className='px-5' variant='outline-primary' size='sm'
                    onClick={onClickWrite}>글쓰기</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <td width='30'>No.</td>
                        <td width='50%'>Title</td>
                        <td>Writer</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map(bbs=>
                        <tr key={bbs.id}>
                            <td>{bbs.no}</td>
                            <td className='ellipsis'>
                                <div className='ellipsis'>
                                    <a href={`${basename}/bbs/${bbs.id}`}>{bbs.title}</a>
                                </div>
                            </td>
                            <td>
                                <div className='ellipsis'>{bbs.email}</div>
                            </td>
                            <td>
                                <div className='ellipsis'>{bbs.date}</div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className='text-center'>
                <Button onClick={()=>setPage(page-1)}
                    variant='outline-primary' size='sm' disabled={page===1}>이전</Button>
                <span className='px-2'>{page}/{last}</span>
                <Button onClick={()=>setPage(page+1)}
                    variant='outline-primary' size='sm' disabled={page===last}>다음</Button>
            </div>
        </div>
    )
}

export default ListPage
