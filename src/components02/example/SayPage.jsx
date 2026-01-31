//message, color state 변수 설정 후 상태변경하기
//-------------------------------------------
import React, { useState } from 'react'
import '../Style02.css'

const SayPage = () => {
    const initMessage = 'Please press the button!'
    return (
        <div className='box'>
            <h1>{initMessage}</h1>
            <div>
                <button>입장</button>
                <button>퇴장</button>
            </div>
            <div>
                <button>빨강색</button>
                <button>초록색</button>
                <button>파랑색</button>
            </div>
        </div>
    )
}
export default SayPage