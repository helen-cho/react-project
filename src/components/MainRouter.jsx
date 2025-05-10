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
                <Route path='/' element={<HomePage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </Container>
    )
}

export default MainRouter
