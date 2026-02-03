//useEffect을 이용해 jsonplaceholder의 posts 데이터 불러오기
//page가 변경될 때마다 해당 페이지의 5개의 데이터 불러오기
//posts의 제목을 클릭할 때마다 본문이 보였다, 사라졌다하는 토글기능
//-----------------------------------------------------------------
import React, { useEffect, useState, useRef } from 'react'
import PageButton from './PageButton'
import '../Style04.css'

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const size = 5;
    const lastRef = useRef(1);

    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            //setPosts(json);
            const start = (page-1) * size + 1;
            const end = (page * size);
            const data = json.filter(post=>post.id>=start && post.id<=end);
            setPosts(data);
            lastRef.current=Math.ceil(json.length/size);
        });
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    const onToggle = (id) => {
        const data = posts.map(post=>post.id===id ? {...post, visible:!post.visible}: post)
        setPosts(data);
    }   

    return (
        <div className='box'>
            <h1>Posts</h1>
            {posts.map(post=>
                <React.Fragment key={post.id}>
                    <h5 onClick={()=>onToggle(post.id)} className='title'>{post.id}. {post.title}</h5>
                    {post.visible && <div className='body'>{post.body}</div>}
                </React.Fragment>
            )}
            <PageButton page={page} setPage={setPage} last={lastRef.current}/>
        </div>
    )
}
export default PostPage