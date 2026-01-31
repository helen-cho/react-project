import React from 'react'
import { useSearchParams } from 'react-router-dom'

const AboutPage = () => {
    const [search] = useSearchParams(); //search 객체의 값들은 모두 문자열 숫자나 boolean인 경우 변환
    const page = parseInt(search.get('page'));
    const query = search.get('query');
    const detail = search.get('detail')==='true';
    return (
        <div>
            <h1>소개</h1>
            <div>리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</div>
            {detail &&
                <div>페이지:{page+1}, 검색어:{query}</div>
            }
        </div>
    )
}
export default AboutPage