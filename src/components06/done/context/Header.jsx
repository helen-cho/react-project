import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext';

const Header = () => {
    const {dark} = useContext(ThemeContext);
    const {user} = useContext(UserContext);

    return (
        <div className={`header ${dark ? 'black':'gray'}`}>
            <h1>Welcom {user.name}</h1>
        </div>
    )
}
export default Header