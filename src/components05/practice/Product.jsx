import { ACTION_TYPE } from "./CartPage";

const Product = ({product, type, dispatch}) => {
    const onDelete = () => {
        if(window.confirm(`${product.name} delete ?`)){
            dispatch({
                type:ACTION_TYPE.delete,
                product
            })
        }
    }

    return (
        <tr>
            <td width='50px'>{product.id}</td>
            <td width='270px'>{product.name}</td>
            {type==='cart' &&
                <td>
                    <button onClick={onDelete}>삭제</button>
                    <button>주문</button>
                </td>
            }
            {type ==='order' &&
                <td>
                    <button>취소</button>
                </td>
            }
        </tr>
    )
}
export default Product