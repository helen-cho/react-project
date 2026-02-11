import React from 'react'
import {ACTION_TYPE} from './CartPage'

const Product = ({product, type, dispatch}) => {
    return (
        <tr>
            <td width='50px'>{product.id}</td>
            <td width='270px'>{product.name}</td>
            {type==='cart'?
                <td>
                    <button onClick={()=>dispatch({type:ACTION_TYPE.delete, product})}>삭제</button>
                    <button onClick={()=>dispatch({type:ACTION_TYPE.order, product})}>주문</button>
                </td>
                :
                <td>
                    <button onClick={()=>dispatch({type:ACTION_TYPE.cancel, product})}>취소</button>
                </td>
            }
        </tr>
    )
}

export default Product
