import { Spinner } from 'react-bootstrap'
import loading from './loading.gif'

const Loading = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            {/*public 폴더 파일은 import가 불가능하므로 src='/loading.gif' 또는 아래와 같이 지정한다. */}
            <img src={`/loading.gif`}/>
            <div className='mt-2'>Loading...</div>
        </div>
    )
}
export default Loading