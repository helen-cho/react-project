import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Profile from './Profile'

const ProfilePage = () => {
    return (
        <div>
            <h1>프로필</h1>
            <ul>
                <li><NavLink to='/profiles/hong'>홍길동</NavLink></li>
                <li><NavLink to='/profiles/kang'>강참찬</NavLink></li>
                <li><NavLink to='/profiles/sung'>성춘향</NavLink></li>
            </ul>
            <Routes>
                <Route path='/' element={<div>사용자를 입력해 주세요.</div>}/>
                <Route path='/:username' element={<Profile/>}/>
            </Routes>
        </div>
    )
}
export default ProfilePage