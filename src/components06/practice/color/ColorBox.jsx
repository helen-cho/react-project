import React, { useContext } from 'react'
import { ColorContext } from './ColorContext'

const ColorBox = () => {
    const {state} = useContext(ColorContext);

    return (
        <div>
            <div style={{width:'100px', height:'100px', 
                background:state.big}}/>
            <div style={{width:'50px', height:'50px', 
                background:state.small}}/>
        </div>
    )
}

export default ColorBox
