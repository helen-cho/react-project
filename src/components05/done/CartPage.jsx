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

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPE.add:
            return {
                ...state,
                cart:{
                    count:state.cart.count+1,
                    products:[...state.cart.products, action.product]
                }
            }
        case ACTION_TYPE.delete:
            return {
                ...state,
                cart:{
                    count:state.cart.count-1,
                    products:state.cart.products.filter(p=>p.id!==action.product.id)
                }
            }
        case ACTION_TYPE.order:
            return {
                ...state,
                cart:{
                    count:state.cart.count-1,
                    products:state.cart.products.filter(p=>p.id!==action.product.id)
                },
                order:{
                    count:state.order.count+1,
                    products:[...state.order.products, action.product]
                }
            }
        case ACTION_TYPE.cancel:
            return {
                ...state,
                order:{
                    count:state.order.count-1,
                    products:state.order.products.filter(p=>p.id!=action.product.id)
                },
                cart:{
                    count:state.cart.count+1,
                    products:[...state.cart.products, action.product]
                }
            }
        default:
            return state;
    }
}

const CartPage = () => {
    const [name, setName] = useState('삼성 세탁기');
    const [state, dispatch] = useReducer(reducer, initState);
    const idRef = useRef(4)
    return (
        <div className='box'>
            <div>
                <h1>카트 목록</h1>
                <h5>상품수:{state.cart.count}개</h5>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='상품이름'/>
                <button onClick={()=>dispatch({type:ACTION_TYPE.add, product:{id:idRef.current++, name}})}>등록</button>
                <table>
                    <tbody>
                        {state.cart.products.map(p=>
                            <Product key={p.id} product={p} type='cart' dispatch={dispatch}/>
                        )}
                    </tbody>
                </table>
            </div>
            <div>
                <h1>주문 목록</h1>
                <h5>상품수:{state.order.count}개</h5>
                <tbody>
                    {state.order.products.map(p=>
                        <Product key={p.id} product={p} type='order' dispatch={dispatch}/>
                    )}
                </tbody>
            </div>
        </div>
    )
}
export default CartPage