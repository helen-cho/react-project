//JSX에서 자바스크립트 표현식을 구성하는 변수, 
//연산자(AND, OR, 삼항, 스프레드) 사용방법
//---------------------------------------
import '../Style01.css'

const Expression = () => {
    const name='Chris';
    const age = 30;
    const job = 'Programer';
    const isLogin=true;
    
    return (
        <div className='box'>
            <h1>변수값 출력</h1>
            
            <h1>삼항 연산자</h1>

            <h1>AND 연산자</h1>
           
            <h1>OR 연산자</h1>
         
            <h1>스프레드 연산자</h1>
        </div>
    )
}
export default Expression