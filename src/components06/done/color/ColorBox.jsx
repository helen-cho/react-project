import React, { useContext } from 'react'
import { ColorContext } from './ColorContext'

const ColorBox = () => {
    const { big, small } = useContext(ColorContext);
    return (
        <div>
            <div style={{width:'100px', height:'100px', background:big}}/>
            <div style={{width:'50px', height:'50px', background:small}}/>
        </div>
    )
}

export default ColorBox
