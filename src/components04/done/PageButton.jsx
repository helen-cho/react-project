const PageButton = ({ page, setPage, last }) => {
    return (
        <div className='buttons'>
            <button onClick={()=>setPage(page-1)} disabled={page===1}>이전</button>
            <span> {page}/{last} </span>
            <button onClick={()=>setPage(page+1)} disabled={page===last}>다음</button>
        </div>
    )
}
export default PageButton