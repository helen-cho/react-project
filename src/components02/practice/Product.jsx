import React from 'react'

const Product = ({product}) => {
    const {id, name, price, description} = product;
    return (
        <React.Fragment>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{parseInt(price).toLocaleString()}</td>
            </tr>
            <tr>
                <td colSpan={3}>{description}</td>
            </tr>
        </React.Fragment>
    )
}
export default Product