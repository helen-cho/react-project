//JSX 요소에 직접 스타일을 적용하는 인라인 방식, 
//className으로 스타일을 적용해 본다.
//----------------------------------------
import '../Style01.css'

const StylePage = () => {
    const style={
        fontSize:'30px',
        fontFamily:'궁서체',
        color:'green'
    }
    return (
        <div className='box'>
            <h1 style={{fontSize:'50px',color:'red'}}>안녕 리액트!</h1>
            <h2 style={style}>저는 홍길동입니다.</h2>
            <h3 style={style}>만나서 반갑습니다.</h3>
        </div>
    )
}
export default StylePage