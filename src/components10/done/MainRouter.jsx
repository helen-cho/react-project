import { Route, Routes } from 'react-router'
import MenuBar from './MenuBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
import ShopPage from './ShopPage'
import ModalProvider from '../context/ModalProvider'
import '../Style.css'
import { Container } from 'react-bootstrap'

const MainRouter = () => {
    return (
        <ModalProvider>
            <Container>
                <MenuBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/book' element={<BookPage/>}/>
                    <Route path='/shop' element={<ShopPage/>}/>
                </Routes>
            </Container>
        </ModalProvider>
    )
}
export default MainRouter