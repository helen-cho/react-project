import React from 'react'
import { useSearchParams } from 'react-router-dom'

const AboutPage = () => {
    const [search] = useSearchParams();
    const page = parseInt(search.get('page')) || 1;
    const query = search.get('query') || '';
    const show = search.get('show') === 'true';
    console.log(page, query, show);

    return (
        <div>
            <h1>소개</h1>
            <div>리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</div>
            {show &&
                <div>
                    페이지: {page}, 검색어: {query}
                </div>
            }
        </div>
    )
}
export default AboutPage