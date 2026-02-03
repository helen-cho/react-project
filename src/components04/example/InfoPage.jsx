//useEffect 이용해 렌더링할때 마다 원하는 작업실행
//-------------------------------------------
import React, { useState, useEffect } from 'react'
import '../Style04.css'

const InforPage = () => {
    //1.렌더링이 될 때마다 이름, 나이 출력
    //2.처음 렌더링 될 때만 이름, 나이 출력
    //3.나이(age)가 변경될 때 마다 이름, 나이 출력

    return (
        <div className='box'>
            <h1>이름:?, 나이:?</h1>
            <input placeholder='이름'/>
            <input placeholder='나이' type='number' step={2}/>
        </div>
    )
}
export default InforPage