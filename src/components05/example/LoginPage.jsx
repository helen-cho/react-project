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
        valid:false,
        //error:ERROR_MESSAGE.password 
    },
    formValid:false,
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPE.email:
            const emailValid = action.value.includes('@');
        case ACTION_TYPE.password:
            const passwordValid = action.value.length>=6;
        default:
            return state;
    }
}

const LoginPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='box' onSubmit={onSubmit}>
            <input placeholder='이메일'/>
            <span className='error'>...</span><br/>
            <input placeholder='비밀번호' type='password'/>
            <span className='error'>...</span><br/>
            <button type='submit'>로그인</button>
        </form>
    )
}

export default LoginPage
