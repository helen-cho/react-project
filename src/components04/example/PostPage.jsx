//useEffect을 이용해 jsonplaceholder의 posts 데이터 불러오기
//page가 변경될 때마다 해당 페이지의 5개의 데이터 불러오기
//posts의 제목을 클릭할 때마다 본문이 보였다, 사라졌다하는 토글기능
//-----------------------------------------------------------------
import React, { useEffect, useState, useRef } from 'react'
import PageButton from './PageButton'
import '../Style04.css'

const PostPage = () => {
    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
    }

    useEffect(()=>{
        callAPI();
    }, []);

    return (
        <div className='box'>
            <h1>Posts</h1>
            <PageButton/>
        </div>
    )
}
export default PostPage