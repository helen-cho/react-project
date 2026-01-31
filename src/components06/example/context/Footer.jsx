import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext'

const Footer = () => {
    return (
        <div className={`footer`}>
            <button>
                Login
            </button>
            <button>Dark Mode</button>
        </div>
    )
}
export default Footer