import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPage from './ListPage'
import RegisterPage from './RegisterPage'
import ReadPage from './ReadPage'
import UpdatePage from './UpdatePage'

const PostRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ListPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/:id' element={<ReadPage/>}/>
            <Route path='/update/:id' element={<UpdatePage/>}/>
        </Routes>
    )
}
    
export default PostRouter
