//변경 색상을 클릭하면 큰박스의 색이 바뀌고 오른쪽 클릭하면 작은박스의 색상변경
import React from 'react'
import ColorSelect from './ColorSelect'
import ColorBox from './ColorBox'
import '../../Style06.css'
import ColorProvider from './ColorProvider'

const ColorPage = () => {
    return (
        <ColorProvider>
            <div className='box'>
                <ColorSelect/>
                <hr/>
                <ColorBox/>
            </div>
        </ColorProvider>
    )
}

export default ColorPage
