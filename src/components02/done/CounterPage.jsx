//number를 일반 변수로 정의하여 증감하기
//number를 state 변수로 정의하여 증감하기
//------------------------------------------
import React, { useState } from 'react'
import '../Style02.css'

const CounterPage = () => {
    //let number = 0;
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        //number++;
        console.log(number);
        setNumber(number+1);
    }
    const onDecrease = () => {
        //number--;
        console.log(number);
        setNumber(number-1);
    }

    return (
        <div className='box'>
            <h1>{number}</h1>
            <button onClick={onDecrease}>감소</button>
            <button onClick={onIncrease}>증가</button>
        </div>
    )
}
export default CounterPage