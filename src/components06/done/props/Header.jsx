const Header = ({dark}) => {
    return (
        <div className={`header ${dark ? 'black':'gray'}`}>
            <h1>Welcom 사용자</h1>
        </div>
    )
}
export default Header
