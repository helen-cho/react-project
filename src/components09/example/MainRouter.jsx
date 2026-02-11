import { Route, Routes } from 'react-router'
import MenuBar from './MenuBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
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
                </Routes>
            </Container>
        </ModalProvider>
    )
}
export default MainRouter