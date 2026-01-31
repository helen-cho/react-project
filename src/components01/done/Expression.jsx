//JSX에서 자바스크립트 표현식을 구성하는 변수, 연산자(AND, OR, 삼항, 스프레드) 사용방법을 알아본다.
import '../Style01.css'

const Expression = () => {
    const name='Chris';
    const age = 20;
    const job = 'Student';
    const isLogin=true;
    const student = {name, age}
    const person = {...student, job}

    return (
        <div className='box'>
            <h1>변수값 출력</h1>
            <h3>{name || 'Justin'}, {age+10}, {job || 'Programer'}, {isLogin.toString()}</h3>
            <h3>{`Name:${name}, Age:${age}, Job:${job}`}</h3>
            
            <h1>삼항 연산자</h1>
            <h3>{isLogin ? <button>Logout</button>:<button>Login</button>}</h3>

            <h1>AND 연산자</h1>
            <h3>{isLogin && <div>{name || 'Justin'}, {age || 0}, {job || 'Programer'}</div>}</h3>
            <h3>{!isLogin && <div>Please Login!</div>}</h3>

            <h1>OR 연산자</h1>
            <h3>{age || 0}</h3>
            <h3>{job || 'Programer'}</h3>

            <h1>스프레드 연산자</h1>
            <h3>{person.name || 'Justin'}, {person.age || 0}, {person.job || 'Programer'}</h3>
        </div>
    )
}
export default Expression
