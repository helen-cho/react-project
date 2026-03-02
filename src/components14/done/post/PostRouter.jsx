import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPage from './ListPage'
import RegisterPage from './RegisterPage'

const PostRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ListPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
    )
}
    
export default PostRouter
