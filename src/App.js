import './App.css';
import FooterPage from './components/FooterPage';
import Menubar from './components/Menubar';

function App() {
    const basename = process.env.PUBLIC_URL;
    return (
        <div>
            <img src={basename + '/home.jpg'} width='100%'/>
            <Menubar />
            <FooterPage />
        </div>
    );
}

export default App;
