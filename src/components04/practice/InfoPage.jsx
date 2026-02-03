//useEffect 이용해 렌더링할때 마다 원하는 작업실행
//-------------------------------------------
import React, { useState, useEffect, useRef } from 'react'
import '../Style04.css'

const InforPage = () => {
    const [name, setName] = useState('Justin');
    const [age, setAge] = useState(20);

    //1.렌더링이 될 때마다 이름, 나이 출력
    // useEffect(()=>{
    //     console.log(name, age);
    // });

    //2.처음 렌더링 될 때만 이름, 나이 출력
    // useEffect(()=>{
    //     console.log(name, age);
    // }, []);

    //3.나이(age)가 변경될 때 마다 이름, 나이 출력
    useEffect(()=>{
        console.log(name, age);
    }, [age]);
    
    return (
        <div className='box'>
            <h1>이름:{name || '?'}, 나이:{age || '?'}</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='이름'/>
            <input value={age} onChange={(e)=>setAge(e.target.value)} placeholder='나이' type='number' step={2}/>
        </div>
    )
}
export default InforPage