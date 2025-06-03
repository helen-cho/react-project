import { Route, Routes } from 'react-router-dom'
import ListPage from './bbs/ListPage'
import WriterPage from './bbs/WriterPage'
import ReadPage from './bbs/ReadPage'
import UpdatePage from './bbs/UpdatePage'

const BBSRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ListPage/>}/>
            <Route path='/write' element={<WriterPage/>}/>
            <Route path='/:id' element={<ReadPage/>}/>
            <Route path='/update/:id' element={<UpdatePage/>}/>
        </Routes>
    )
}

export default BBSRouter
