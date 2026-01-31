//useEffect 이용해 렌더링할때 마다 원하는 작업실행
import React, { useEffect, useState } from 'react'
import '../Style04.css'

const InforPage = () => {
    const [name, setName] = useState('홍길동');
    const [age, setAge] = useState(20);

    useEffect(()=>{
        console.log(name, age);
    }, [age]);

    return (
        <div className='box'>
            <h1>이름:{name}, 나이:{age}</h1>
            <input placeholder='이름' 
                value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder='나이' type='number' step={2}
                value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
    )
}

export default InforPage