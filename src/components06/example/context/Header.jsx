import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext';

const Header = () => {
    return (
        <div className={`header`}>
            <h1>Welcom 사용자</h1>
        </div>
    )
}
export default Header