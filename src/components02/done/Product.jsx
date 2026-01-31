const Product = ({product}) => {
    const { id, name, price } = product;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price.toLocaleString()}</td>
            </tr>
            <tr style={{background:'gray', color:'white'}}>
                <td colSpan={3}>상품설명</td>
            </tr>
        </>
    )
}
export default Product
