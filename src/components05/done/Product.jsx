import React from 'react'

const Product = ({product, type, dispatch}) => {
    return (
        <tr>
            <td width='50px'>{product.id}</td>
            <td width='270px'>{product.name}</td>
            {type==='cart'?
                <td>
                    <button onClick={()=>dispatch({type:'delete', product})}>삭제</button>
                    <button onClick={()=>dispatch({type:'order', product})}>주문</button>
                </td>
                :
                <td>
                    <button onClick={()=>dispatch({type:'cancel', product})}>취소</button>
                </td>
            }
        </tr>
    )
}

export default Product
