//useEffect을 이용해 jsonplaceholder의 todos 데이터 불러오기
//page가 변경될 때마다 해당 페이지의 5개의 데이터 불러오기
//todos의 completed가 바뀔 때마다 체크상태 토글하기
//선택, 해지할 때마다 전체 completed 체크상태 변경
//----------------------------------------------------------
import React, { useState, useEffect, useRef } from 'react'
import '../Style04.css'
import PageButton from './PageButton';

const TodoPage = () => {
    
    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
    }

    return (
        <div className='box'>
            <h1>Todos</h1>
            <input type='checkbox'/><span>선택/해제</span>
            <hr/>
            <PageButton/>
        </div>
    )
}
export default TodoPage