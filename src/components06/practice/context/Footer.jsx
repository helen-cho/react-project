import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const Footer = () => {
    const {dark, setDark} = useContext(ThemeContext);
    return (
        <div className={`footer ${dark ? 'black':'gray'}`}>
            <button onClick={()=>setDark(!dark)}>
                {dark ? 'Light Mode':'Dark Mode'}
            </button>
        </div>
    )
}
export default Footer