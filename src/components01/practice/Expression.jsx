//JSX에서 자바스크립트 표현식을 구성하는 변수, 
//연산자(AND, OR, 삼항, 스프레드) 사용방법
//---------------------------------------
import '../Style01.css'

const Expression = () => {
    const name='Chris';
    const age = 30;
    const job = 'Programer';
    const isLogin=false;
    const student = {name, age};
    const person={...student, job};
    return (
        <div className='box'>
            <h1>변수값 출력</h1>
            <h3>Name:{name}, Age:{age+1}, Job:{job}, {isLogin.toString()}</h3>
            <h1>삼항 연산자</h1>
            {isLogin ? <button>Logout</button> : <button>Login</button>}
            <h1>AND 연산자</h1>
            {isLogin && <h3>Name:{name}</h3>}
            <h1>OR 연산자</h1>
            {name || <h3>No Name</h3>}
            <h1>스프레드 연산자</h1>
            <h3>{person.name}, {person.age}, {person.job}</h3>
        </div>
    )
}
export default Expression