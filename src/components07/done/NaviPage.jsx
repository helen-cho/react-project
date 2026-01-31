import React from 'react'
import { useNavigate } from 'react-router-dom'

const NaviPage = () => {
    const navi=useNavigate();
    return (
        <div>
            <h1>Navigation</h1>
            <button onClick={()=>navi(-1)}>뒤로</button>
            <button onClick={()=>navi('/')}>홈으로</button>
        </div>
    )
}
export default NaviPage