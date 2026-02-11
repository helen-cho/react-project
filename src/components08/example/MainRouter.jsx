//리액트 부트스트랩, 리액트 아이콘, axios 설치
import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route, NavLink } from 'react-router-dom'
import LayoutPage from './LayoutPage'
import TablePage from './TablePage'
import FormPage from './FormPage'
import '../Style08.css'
import ModalProvider from '../context/ModalProvider'

const MainRouter = () => {
    return (
        <Container className='mt-5'>
            <NavLink to='/'>레이아웃</NavLink>
            <NavLink to='/table'>테이블</NavLink>
            <NavLink to='/form'>폼</NavLink>
            <hr/>
            <Routes>
                <Route path='/' element={<LayoutPage/>}/>
                <Route path='/table' element={<TablePage/>}/>
                <Route path='/form' element={<FormPage/>}/>
            </Routes>
        </Container>
)
}
export default MainRouter