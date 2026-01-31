//상품목록을 출력하고 form의 입력상자 내용이 변경 될때마다 form state 값 변경 
//onSubmit 핸들러에 상품등록 함수, onReset 핸들러에 입력상자 초기화 함수등록
//상품 등록시 useRef를 이용해 id 증가시키고 이름 입력상자에 포커스 지정
//상품목록 특정행에서 마우스 오른쪽 버튼 클릭시 해당상품 삭제
//----------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import '../Style03.css'

const data = [
    { id: 1, name: '삼성 세탁기', price: 2500000},
    { id: 2, name: '엘지 냉장고', price: 3500000},
    { id: 3, name: '삼성 스타일러', price: 150000},
]

const initForm = {name:'엘지 TV', price:2000000};

const RegisterPage = () => {
    return (
        <div className='box'>
            <h1>상품등록</h1>
            <form>
                <input placeholder='상품이름' name='name'/>
                <input placeholder='상품가격' name='price' type='number' step={1000}/>
                <div>
                    <button type='submit'>등록</button>
                    <button type='reset'>취소</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterPage