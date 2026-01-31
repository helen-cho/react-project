import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const PagingButton = () => {
    return (
        <div className='text-center mt-3'>
            <Button>이전</Button>
            <span className='mx-3'>{1}/{10}</span>
            <Button>다음</Button>
        </div>
    )
}
export default PagingButton