const Content = ({dark}) => {
    return (
        <div className={`content ${dark ? 'black':'white'}`}>
            <h1>사용자님 좋은 하루되세요!</h1>
        </div>
    )
}
export default Content