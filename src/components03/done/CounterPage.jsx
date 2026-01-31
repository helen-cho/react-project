//마우스 왼쪽 버튼을 클릭(onClick)하면 1증가, 
//마우스 오른쪽 버튼을 클릭(onContextMenu)하면 1감소
//ON/OFF 버튼 토글되고 ON인 경우만 증감버튼 작동
//-------------------------------------------------
import React, { useState } from 'react'
import '../Style03.css'

const CounterPage = () => {
    const [number, setNumber] = useState(0);
    const [isToggle, setIsToggle] = useState(true);

    const onClickLeft = () => {
        setNumber(number+1);
    }

    const onClickRight = (e) => {
        e.preventDefault();
        setNumber(number-1);
    }

    return (
        <div className='box'>
            <h1>{number}</h1>
            <button disabled={!isToggle} onClick={onClickLeft} onContextMenu={onClickRight}>증감</button>
            <button onClick={()=>setIsToggle(!isToggle)}>{isToggle ? 'ON' : 'OFF'}</button>
        </div>
    )
}
export default CounterPage