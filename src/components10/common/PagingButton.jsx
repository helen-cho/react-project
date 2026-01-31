import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const PagingButton = ({page, last, query}) => {
    const navi = useNavigate();
    const { pathname } = useLocation();
    const onChangePage = (page) => {
        navi(`${pathname}?page=${page}&query=${query}`);
    }
    return (
        <div className='text-center mt-3'>
            <Button onClick={()=>onChangePage(page-1)} disabled={page===1}>이전</Button>
            <span className='mx-3'>{page}/{last}</span>
            <Button onClick={()=>onChangePage(page+1)} disabled={page===last}>다음</Button>
        </div>
    )
}
export default PagingButton