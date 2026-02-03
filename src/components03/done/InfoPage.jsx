//입력상자에서 키를 입력(onChange)하면 state변수 변경
//확인버튼 클릭하면 경고창 띄우기
//Enter키를 누르면(onKeyDown) 경고창 띄우기
//useRef Hook을 사용하여 포커스(focus) 이동
//------------------------------------------------
import React, { useRef, useState } from 'react'
import '../Style03.css'

const InfoPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const nameRef = useRef(null);

    const onClick = () => {
        if(!name || !age){
            alert('이름또는 나이를 입력하세요!');
        }else{
            alert(`${name}, ${age} 등록완료!`);
        }
        nameRef.current.focus();
    }

    const onKeyDown = (e) => { 
        if(e.key==='Enter') onClick(); 
    }
    
    return (
        <div className='box'>
            <h3>이름:{name || '?'} | 나이:{age || '?'}</h3>
            <input ref={nameRef} value={name} 
                onChange={(e)=>setName(e.target.value)} onKeyDown={onKeyDown}
                placeholder='이름'/><br/>
            <input value={age} 
                onChange={(e)=>setAge(e.target.value)} onKeyDown={onKeyDown}
                placeholder='나이' type='number' setp={1}/><br/>
            <button onClick={onClick}>등록</button>
        </div>
    )
}
export default InfoPage