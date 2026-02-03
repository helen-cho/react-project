//useEffect을 이용해 jsonplaceholder의 todos 데이터 불러오기
//page가 변경될 때마다 해당 페이지의 5개의 데이터 불러오기
//todos의 completed가 바뀔 때마다 체크상태 토글하기
//선택, 해지할 때마다 전체 completed 체크상태 변경
//----------------------------------------------------------
import React, { useState, useEffect, useRef } from 'react'
import '../Style04.css'
import PageButton from './PageButton';

const TodoPage = () => {
    const [page, setPage]= useState(1);
    const [todos, setTodos] = useState([]);
    const lastRef = useRef(1);
    const size=5;

    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            const start = (page-1) * size + 1;
            const end = (page * size)
            const data = json.filter(todo=>todo.id>=start && todo.id<=end);
            setTodos(data);
            lastRef.current=Math.ceil(json.length/size);
        });
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    const onChange = (e, id) => {
        const data = todos.map(todo=>todo.id===id ? {...todo, completed:e.target.checked} : todo);
        setTodos(data);
    }

    return (
        <div className='box'>
            <h1>Todos</h1>
            { todos.map(todo=>
                <div key={todo.id}>
                    <input type='checkbox' checked={todo.completed} onChange={(e)=>onChange(e, todo.id)}/>
                    <span className='title'>{todo.title}</span>
                </div>
            )}
            <PageButton page={page} setPage={setPage} last={lastRef.current}/>
        </div>
    )
}
export default TodoPage