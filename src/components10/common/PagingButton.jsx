import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const PagingButton = ({page, last, query}) => {
    const navi = useNavigate();
    const { pathname } = useLocation();
    
    return (
        <div className='text-center mt-3'>
            <Button onClick={()=>navi(`${pathname}?page=${page-1}&query=${query}`)} 
                disabled={page===1}>이전</Button>
            <span className='mx-3'>{page}/{last}</span>
            <Button onClick={()=>navi(`${pathname}?page=${page+1}&query=${query}`)} 
                disabled={page===last}>다음</Button>
        </div>
    )
}
export default PagingButton