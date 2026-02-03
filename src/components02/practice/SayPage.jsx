//message, color state 변수 설정 후 상태변경하기
//-------------------------------------------
import React, { useState } from 'react'
import '../Style02.css'

const SayPage = () => {
    const initMessage = 'Please press the button!'
    const [message, setMessage] = useState(initMessage);
    const [textColor, setTextColor] = useState('red');

    return (
        <div className='box'>
            <h1 style={{color:textColor}}>{message}</h1>
            <div>
                <button onClick={()=>setMessage('Hello!')}>입장</button>
                <button onClick={()=>setMessage('Good Bye!')}>퇴장</button>
            </div>
            <div>
                <button onClick={()=>setTextColor('red')}>빨강색</button>
                <button onClick={()=>setTextColor('green')}>초록색</button>
                <button onClick={()=>setTextColor('blue')}>파랑색</button>
            </div>
        </div>
    )
}
export default SayPage