//리액트 부트스트랩->Components->Buttons
import { Button } from 'react-bootstrap'

const PageButton = ({ page, setPage, last }) => {
    return (
        <div className='text-center mt-3'>
            <Button onClick={()=>setPage(page-1)} disabled={page===1}>이전</Button>
            <span> {page}/{last} </span>
            <Button onClick={()=>setPage(page+1)} disabled={page===last}>다음</Button>
        </div>
    )
}
export default PageButton