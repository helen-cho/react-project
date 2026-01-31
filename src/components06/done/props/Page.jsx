import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Page = ({dark, setDark}) => {
    return (
        <div>
            <Header dark={dark}/>
            <Content dark={dark}/>
            <Footer dark={dark} setDark={setDark}/>
        </div>
    )
}
export default Page