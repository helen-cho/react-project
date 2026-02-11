//1. 등록 : 장바구니 상품수를 1증가하고 장바구니 목록에 상품을 등록한다.
//2. 삭제 : 장바구니 상품수를 1감소하고 장바구니 목록에서 해당 상품을 삭제한다.
//3. 주문 : 장바구니 상품수를 1감소하고 장바구니 목록에서 상품을 삭제하고 주문 상품수를 1증가하고 주문 목록에 상품을 등록한다.
//4. 취소 : 주문 상품수를 1감소하고 주문 목록에서 상품을 삭제하고 장바구니 상품수를 1증가하고 장바구니 목록에 상품을 등록한다.
//------------------------------------------------------------------------------------------------------------
import React, { useReducer, useState, useRef } from 'react'
import Product from './Product'
import '../Style05.css'

export const ACTION_TYPE = {
    add:'등록',
    delete:'삭제',
    order:'주문',
    cancel:'취소'
}

const initState = {
    cart: {
        count:1,
        products:[{ id:3, name:'삼성 냉장고'}]
    },
    order: {
        count:2,
        products:[{ id:1, name:'엘지 냉장고'}, {id:2, name:'엘지 세탁기'}]
    }
}

const CartPage = () => {
    const [name, setName] = useState('삼성 세탁기');

    return (
        <div className='box'>
            <div>
                <h1>카트 목록</h1>
                <h5>상품수:?개</h5>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='상품이름'/>
                <button >등록</button>
            </div>
            <div>
                <h1>주문 목록</h1>
                <h5>상품수:?개</h5>
            </div>
        </div>
    )
}
export default CartPage