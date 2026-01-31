//JSONRouter컴포넌트 '/json/:type' 에 JSONPage컴포넌트를 등록한다.
//-----------------------------------------------------------
import { NavLink, Route, Routes } from 'react-router-dom'
import JSONPage from './JSONPage'
import '../Style07.css'

const JSONRouter = () => {
    return (
        <div className='box'>
            <div>
                <NavLink to='/json/posts'>Posts</NavLink>
                <NavLink to='/json/todos'>Todos</NavLink>
                <NavLink to='/json/albums'>Albums</NavLink>
            </div>
            <Routes>
                <Route path='/json/:type' element={<JSONPage/>}/>
            </Routes>
        </div>
    )
}
export default JSONRouter