import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { UserContext } from "./UserContext";

const Header = () => {
    const {dark} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserContext);
    return (
        <div className={`header ${dark ? 'black':'gray'}`}>
            <h1>Welcom {user || '사용자'}</h1>
            {user ? 
                <button onClick={()=>setUser('')}>Logout</button>
                :
                <button onClick={()=>setUser('홍길동')}>Login</button>}
        </div>
    )
}
export default Header