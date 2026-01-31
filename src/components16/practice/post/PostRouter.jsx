//1. 날짜 포맷을 지정하는 함수를 설치한다.(npm install moment)
//2. post 폴더에 서브 PostRouter를 MainRouter에 등록한다.('/post/*')
//---------------------------------------------------------------------
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