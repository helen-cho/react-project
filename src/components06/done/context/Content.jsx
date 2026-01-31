import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext';

const Content = () => {
    const {dark} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    return (
        <div className={`content ${dark ? 'black':'white'}`}>
            <h1>{user.name}님 좋은 하루되세요!</h1>
        </div>
    )
}
export default Content