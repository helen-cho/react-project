import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const Paging = ({page, last, query}) => {
    const { pathname } = useLocation();
    const navi = useNavigate();

    const onChangePage = (page) => {
        navi(`${pathname}?page=${page}&query=${query}`);
    }

    return (
        <div className='text-center mt-3'>
            <Button onClick={()=>onChangePage(page-1)} disabled={page===1}>이전</Button>
            <span className='mx-3'>{page}/{parseInt(last).toLocaleString()}</span>
            <Button onClick={()=>onChangePage(page+1)} disabled={page===last}>다음</Button>
        </div>
    )
}

export default Paging
