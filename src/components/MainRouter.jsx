import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import CartPage from './user/CartPage'
import LoginPage from './user/LoginPage'
import JoinPage from './user/JoinPage'
import BBSRouter from './BBSRouter'

const MainRouter = () => {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/join' element={<JoinPage/>}/>
                <Route path='/bbs/*' element={<BBSRouter/>}/>
            </Routes>
        </Container>
    )
}

export default MainRouter
