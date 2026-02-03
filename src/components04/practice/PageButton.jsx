import React from 'react'

const PageButton = ({page, setPage, last}) => {
    return (
        <div className='buttons'>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>이전</button>
            <span> {page}/{last} </span>
            <button disabled={page===last} onClick={()=>setPage(page+1)}>다음</button>
        </div>
    )
}
export default PageButton