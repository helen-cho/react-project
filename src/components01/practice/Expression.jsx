//JSX에서 자바스크립트 표현식을 구성하는 변수, 
//연산자(AND, OR, 삼항, 스프레드) 사용방법
//---------------------------------------
import '../Style01.css'

const Expression = () => {
    const name='홍길동';
    const age = null;
    const job = 'Student';
    const isLogin=false;
    const student = {name, age};
    const person = {...student, job}

    return (
        <div className='box'>
            <h1>변수값 출력</h1>
            <h3>{name}, {age||20}, {job}, {isLogin.toString()}</h3>

            <h1>삼항 연산자</h1>
            <h3>{isLogin ? <button>로그아웃</button>:<button>로그인</button>}</h3>

            <h1>AND 연산자</h1>
            <h3>{isLogin && <div>{name}, {age}, {job}</div>}</h3>
            <h3>{!isLogin && <div>로그인해주세요!</div>}</h3>

            <h1>OR 연산자</h1>
            <h3>{name || '무기명'}</h3>

            <h1>스프레드 연산자</h1>
            <h3>{person.name}, {person.age || 20}, {person.job}</h3>
        </div>
    )
}
export default Expression