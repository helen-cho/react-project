//JSONRouter컴포넌트 '/json/:type' 에 JSONPage컴포넌트를 등록한다.
//-----------------------------------------------------------
import { NavLink, Route, Routes } from 'react-router-dom'
import JSONPage from './JSONPage'
import '../Style07.css'
import { Container } from 'react-bootstrap'

const JSONRouter = () => {
    return (
        <Container className='my-5'>
            <div>
                <NavLink className='me-3 px-3' to='/json/posts'>Posts</NavLink>
                <NavLink className='me-3 px-3' to='/json/todos'>Todos</NavLink>
                <NavLink className='me-3 px-3' to='/json/albums'>Albums</NavLink>
            </div>
            <hr/>
            <Routes>
                <Route path='/json/:type' element={<JSONPage/>}/>
            </Routes>
        </Container>
    )
}
export default JSONRouter