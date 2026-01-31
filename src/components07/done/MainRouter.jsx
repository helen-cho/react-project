//1.MainRouter 컴포넌트에서 HomePage, AboutPage, ProfilePage 컴포넌트를 등록한다.
//2.URL 파라미터:ProfilePage에서 서버 라우터를 등록하여 이름을 클릭하면 Profile 컴포넌트를 출력한다.
//3.URL 쿼리:AboutPage 컴포넌트로 detail, query, page를 쿼리로 전달한다.
//4.MainRouter Link를 NavLink로 변경한다.
//5.ProfilePage Link를 NavLink로 변경한다.
//6.active 클래스를 스타일을 Style07.css에 등록한다.

import { Link, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import '../Style07.css'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ProfilePage from './ProfilePage'
import NaviPage from './NaviPage'

const MainRouter = () => {
    const { pathname } = useLocation();
    return (
        <div className='box'>
            <h5>메뉴를 선택하세요! {pathname}</h5>
            <ul>
                <li><NavLink to='/'>홈</NavLink></li>
                <li><NavLink to='/about?page=1&query=노트북&detail=true'>소개</NavLink></li>
                <li><NavLink to='/profiles'>프로필</NavLink></li>
                <li><NavLink to='/info'>Infomation</NavLink></li>
                <li><NavLink to='/navi'>Navigation</NavLink></li>
            </ul>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/profiles/*' element={<ProfilePage/>}/>
                <Route path='/info' element={<AboutPage/>}/>
                <Route path='/navi' element={<NaviPage/>}/>
            </Routes>
        </div>
    )
}
export default MainRouter