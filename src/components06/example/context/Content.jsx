import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext';

const Content = () => {
    return (
        <div className={`content`}>
            <h1>사용자님 좋은 하루되세요!</h1>
        </div>
    )
}
export default Content