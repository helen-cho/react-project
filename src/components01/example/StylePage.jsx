//JSX 요소에 직접 스타일을 적용하는 인라인 방식, 
//className으로 스타일을 적용해 본다.
//----------------------------------------
import '../Style01.css'

const StylePage = () => {
    return (
        <div className='box'>
            <h1>안녕 리액트!</h1>
            <h2>저는 홍길동입니다.</h2>
            <h3>만나서 반갑습니다.</h3>
        </div>
    )
}
export default StylePage