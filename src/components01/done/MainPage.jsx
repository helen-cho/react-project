//MainPage 컴포넌트에 Header, Content, Footer 컴퍼넌트 등록
//MenuBar컴포넌트를 생성하여 Header, Footer에 등록
//RAFCE (React Arrow Function Component Export)
import '../Style01.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const MainPage = () => {
    return (
        <div>
            <h1>홈페이지</h1>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default MainPage