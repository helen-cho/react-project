//1.RootPage컴포넌트에 Page컴퍼넌트 등록
//2.Page컴포넌트에 Header, Content, Footer컴퍼넌트 등록
//3.Footer컴포넌트에서 테마색상을 변경
//4.Footer컴포넌트에서 로그인상태 변경
//--------------------------------------------------
import React, { useState } from 'react'
import '../../Style06.css'
import Page from './Page'

const RootPage = () => {
    return (
        <div>
            <Page/>
        </div>

    )
}
export default RootPage