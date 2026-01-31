//1. 출금버튼 클릭시 금액만큼 잔액에서 감산한다.(단 잔액부족시 경고창)
//2. 입금버튼 클릭시 금액만큼 잔액에서 가산한다.
//3. 이자버튼 클릭시 잔액에서 이율을 곱한 값을 잔액에 가산한다.
//4. 해지버튼 클릭시 잔액를 0으로 바꾼다.
//-----------------------------------------------------------
import React, { useState, useReducer, useRef } from 'react'
import '../Style05.css'

const ACTION_TYPE = {
    deposit:'입금',
    withdrawal:'출금',
    interest:'이자',
    close:'해지'
}

const initState = 10000; //초기 잔액
const rate = 0.1; //이율

const reducer = (state, action) => {
    const money = parseInt(action.money);
    switch(action.type){
        case ACTION_TYPE.deposit:
            return state + money;
        case ACTION_TYPE.withdrawal:
            if(state < money){
                alert('잔액이 부족합니다!');
                return state;
            }
            return state - money;
        case ACTION_TYPE.interest:
            return state + (state * rate);
        case ACTION_TYPE.close:
            return 0;
        default:
            return state;
    }
}

const BankPage = () => {
    const [money, setMoney] = useState(1000);
    const [state, dispatch] = useReducer(reducer, initState);
    const idRef = useRef(2);

    return (
        <div className='box'>
            <h1>잔액:{parseInt(state).toLocaleString()}원</h1>
            <div>
                <span>금액:</span>
                <input value={money} onChange={(e)=>setMoney(e.target.value)} placeholder='금액' type='number' step={1000}/>
            </div>
            <div>
                <button onClick={()=>dispatch({type:ACTION_TYPE.deposit, money})}>입급</button>
                <button onClick={()=>dispatch({type:ACTION_TYPE.withdrawal, money})}>출금</button>
                <button onClick={()=>dispatch({type:ACTION_TYPE.interest})}>이자</button>
                <button onClick={()=>dispatch({type:ACTION_TYPE.close})}>해지</button>
            </div>
        </div>
    )
}
export default BankPage