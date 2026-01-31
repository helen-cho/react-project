import { Route, Routes } from 'react-router'
import HomePage from './HomePage'
import MenuBar from './MenuBar'
import ModalProvider from '../context/ModalProvider'
import BookPage from './BookPage'
import ShopPage from './ShopPage'
import LoginPage from './user/LoginPage'
import JoinPage from './user/JoinPage'
import FavoritePage from './book/FavoritePage'
import CartPage from './shop/CartPage'
import '../Style.css'
import { Container } from 'react-bootstrap'
import PostRouter from './post/PostRouter'

const MainRouter = () => {
    return (
        <ModalProvider>
            <Container>
                <MenuBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/book' element={<BookPage/>}/>
                    <Route path='/shop' element={<ShopPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/join' element={<JoinPage/>}/>
                    <Route path='/favorite' element={<FavoritePage/>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/post/*' element={<PostRouter/>}/>
                </Routes>
            </Container>
        </ModalProvider>
    )
}
export default MainRouter