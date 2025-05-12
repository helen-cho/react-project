import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import CartPage from './CartPage'
import LoginPage from './LoginPage'

const MainRouter = () => {
    return (
        <Container>
            <Routes>
                <Route path={'/react-project'} element={<HomePage/>}/>
                <Route path={`/react-project/cart`} element={<CartPage/>}/>
                <Route path='/react-project/login' element={<LoginPage/>}/>
            </Routes>
        </Container>
    )
}

export default MainRouter
