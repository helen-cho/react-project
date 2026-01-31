import Pagination from 'react-bootstrap/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

const PaginationButton = ({page, last, query}) => {
    const { pathname } = useLocation();
    const navi = useNavigate();
    const onChangePage = (page) => {
        navi(`${pathname}?page=${page}&query=${query}`);
    }
   
    //화면에 보여 지는 페이지 번호의수
    let displayPageNum = 5;
    let endPage = Math.ceil(page/displayPageNum) * displayPageNum
    let startPage = endPage - displayPageNum + 1;
    if(endPage > last) endPage=last;

    let active = page;
    let items = [];
    for (let number = startPage; number <= endPage; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>onChangePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className='justify-content-center my-3'>
            {page!==1 && 
                <>
                    <Pagination.First onClick={()=>onChangePage(1)} disabled={page===1}/>
                    <Pagination.Prev disabled={page===1} onClick={()=>onChangePage(page-1)}/>            
                </>
            }
            {items}
            {page!==last && 
                <>
                    <Pagination.Next disabled={page===last} onClick={()=>onChangePage(page+1)}/>
                    <Pagination.Last onClick={()=>onChangePage(last)} disabled={page===last}/>           
                </>
            }
        </Pagination>
    )
}
export default PaginationButton