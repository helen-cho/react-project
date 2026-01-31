//처리조건
//1.이메일에 '@'이 없으면  '유효한 이메일 주소를 입력하세요!'를 출력
//2.비밀번호는 6자리이상이 아니면 '비밀번호는 6자이상 입력하세요!'를 출력. 
//3.로그인 버튼 클릭 시 formValid가 true인 경우에 submit한다.

import React, { useReducer, useState } from 'react'
import '../Style05.css'

const ERROR_MESSAGE = {
    email:'유효한 이메일 주소를 입력하세요!',
    password:'비밀번호는 6자이상 입력하세요!'
}

const ACTION_TYPE = {
    email:'이메일',
    password:'비밀번호',
}

const initState = {
    email: { 
        value:'',
        valid:false, 
        //error:ERROR_MESSAGE.email
    },
    password:{ 
        value:'', 
        valid:''
        //error:ERROR_MESSAGE.password 
    },
    formValid:false,
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPE.email:
            const emailValid = action.value.includes('@');
            return {
                ...state,
                email: {
                    value:action.value,
                    valid:emailValid,
                },
                formValid:emailValid && state.password.valid
            }
        case ACTION_TYPE.password:
            const passwordValid = action.value.length>=6;
            return {
                ...state,
                password: {
                    value:action.value,
                    valid:passwordValid,
                },
                formValid:passwordValid && state.email.valid
            }
        default:
            return state;
    }
}

const LoginPage = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const onSubmit = (e) => {
        e.preventDefault();

        if(state.formValid) {
            alert('유효성체크 완료!');
        }else{
            alert('유효성체크 미완료!');
        }
    }

    return (
        <form className='box' onSubmit={onSubmit}>
            <input value={state.email.value} 
                onChange={(e)=>dispatch({type:ACTION_TYPE.email, value:e.target.value})} 
                placeholder='이메일'/>
            <span className='error'>{state.email.valid||ERROR_MESSAGE.email}</span><br/>
            <input onChange={(e)=>dispatch({type:ACTION_TYPE.password, value:e.target.value})} 
                value={state.password.value} 
                placeholder='비밀번호' type='password'/>
            <span className='error'>{state.password.valid || ERROR_MESSAGE.password}</span><br/>
            <button type='submit'>로그인</button>
        </form>
    )
}

export default LoginPage