//마우스 왼쪽 버튼을 클릭(onClick)하면 1증가, 
//마우스 오른쪽 버튼을 클릭(onContextMenu)하면 1감소
//-------------------------------------------------
import React, { useState } from 'react'
import '../Style03.css'

const CounterPage = () => {
    return (
        <div className='box'>
            <input style={{width:'100px'}} type='number'/>
            <button>증감</button>
        </div>
    )
}
export default CounterPage