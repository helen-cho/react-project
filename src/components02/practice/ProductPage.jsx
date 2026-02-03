//부모 컴포넌트에서 ID,상품명,가격을 props로 설정하여 자식 컴포넌트로 전달
//React.Fragment(프래그먼트)를 사용하여 상품 설명 출력
//---------------------------------------------------------------
import React from 'react'
import Product from './Product'
import '../Style02.css'

const products = [
    { id:1, name:'삼성 세탁기', price:2500000, description:'다채로운 색상 조합은 어느 공간에서나 조화롭게 어우러짐'},
    { id:2, name:'엘지 냉장고', price:3500000, description:'AI 하이브리드 쿨링과 키친핏 디자인, 스마트싱스 연동 등 개인화 및 편의성을 극대화'},
    { id:3, name:'삼성 스타일러', price:150000, description:'옷을 위아래로 털어주며 좌우 흔들림(트위스트)을 더해 먼지를 효과적으로 제거' },
]

const ProductPage = () => {
    return (
        <div className='box'>
            <h1>상품목록</h1>
            <table>
                <tbody>
                    {products.map(p=>
                        <Product key={p.id} product={p}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default ProductPage