//마우스 왼쪽 버튼을 클릭(onClick)하면 1증가, 
//마우스 오른쪽 버튼을 클릭(onContextMenu)하면 1감소
//-------------------------------------------------
import React, { useState } from 'react'
import '../Style03.css'

const CounterPage = () => {
    const [number, setNumber] = useState(0);
    const onClickRight = (e) =>{
        e.preventDefault();
        setNumber(number-10);
    }
    const onKeyDownNumber = (e) =>{
        if(e.key === 'Enter'){
            alert(`현재값은 ${number}입니다.`);
        }
    }

    return (
        <div className='box'>
            <input onKeyDown={onKeyDownNumber} 
                onChange={(e)=>setNumber(parseInt(e.target.value))}
                value={number}
                style={{width:'100px'}} 
                type='number' 
                step={10}/>
            <button onContextMenu={onClickRight} 
                onClick={()=>setNumber(number+10)}>
                증감</button>
        </div>
    )
}
export default CounterPage