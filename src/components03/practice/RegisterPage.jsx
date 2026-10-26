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
    const [products, setProducts] = useState(data);
    const [form, setForm] = useState(initForm);
    const { name, price } = form;
    const idRef = useRef(4);

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const onRegister = (e) => {
        e.preventDefault();
        if(name==='' || price === ''){
            alert('Please Enter Name and Price!');
        }else{
            setProducts(products.concat(
                {...form, id:idRef.current++})
            );
        }
    }

    const onReset = (e) => {
        e.preventDefault();
        if(initForm === form) return;
        if(window.confirm('Are you sure to Reset?')){
            setForm(initForm);
        }
    }

    const onDelete = (id) => {
        if(window.confirm(`${id} Are you sure to Delete?`)){
            setProducts(products.filter(p=>p.id !== id));
        }
    }

    return (
        <div className='box'>
            <h1>상품등록</h1>
            <form onSubmit={onRegister} onReset={onReset}>
                <input value={name}
                    onChange={onChangeForm}
                    placeholder='상품이름' name='name'/>
                <input value={price}
                    onChange={onChangeForm}
                    placeholder='상품가격' name='price' type='number' step={1000}/>
                <div>
                    <button type='submit'>등록</button>
                    <button type='reset'>취소</button>
                </div>
            </form>
            <h1 style={{marginTop:'30px'}}>상품목록</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>PRICE</td>
                        <td>DEL</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p=>
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{parseInt(p.price).toLocaleString()}</td>
                            <td><a onClick={()=>onDelete(p.id)} 
                                    href='#'>DEL</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default RegisterPage