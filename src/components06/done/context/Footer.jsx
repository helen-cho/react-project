import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext'

const Footer = () => {
    const {dark, setDark} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserContext);
    return (
        <div className={`footer ${dark ? 'black':'gray'}`}>
            {user.isLogin ?
                <button onClick={()=>setUser({isLogin:false, name:'사용자'})}>로그아웃</button>
                : 
                <button onClick={()=>setUser({isLogin:true, name:'홍길동'})}>로그인</button>
            }
            <button onClick={()=>setDark(!dark)}>{dark ? 'Light Mode':'Dark Mode'}</button>
        </div>
    )
}
export default Footer