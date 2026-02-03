//마우스 왼쪽 버튼을 클릭(onClick)하면 1증가, 
//마우스 오른쪽 버튼을 클릭(onContextMenu)하면 1감소,
//입력상자에서 엔터키를 누르면 값을 출력하는 경고창 출력
//-------------------------------------------------
import React, { useState } from 'react'
import '../Style03.css'

const CounterPage = () => {
    const [number, setNumber] = useState(0);

    const onClickLeft = () => {
        setNumber(number+1);
    }

    const onClickRight = (e) => {
        e.preventDefault();
        setNumber(number-1);
    }

    const onKeyDown = (e) => {
        if(e.key==='Enter') {
            alert(`현재 값은 ${number}입니다.`);
        }
    }
    return (
        <div className='box'>
            <input style={{width:'100px'}} type='number' onKeyDown={onKeyDown}
                value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
            <button onClick={onClickLeft} onContextMenu={onClickRight}>증감</button>
        </div>
    )
}
export default CounterPage