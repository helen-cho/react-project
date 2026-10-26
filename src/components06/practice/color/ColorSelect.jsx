import React, { useContext } from 'react'
import { ColorContext } from './ColorContext';

const ColorSelect = () => {
    const colors =['red', 'orange', 'yellow', 'green', 'blue', 
        'indigo', 'violet', 'pink', 'brown'];
    const { dispatch } = useContext(ColorContext);
    const onLeft = (color) => {
        dispatch({type:'big', color:color});
    }
    const onRight = (e, color) => {
        e.preventDefault();
        dispatch({type:'small', color});
    }

    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{ display:'flex' }}>
                { colors.map(color=>
                    <div onContextMenu={(e)=>onRight(e, color)} 
                        onClick={()=>onLeft(color)} 
                        key={color} style={{background:color, 
                        width:'30px', height:'30px', cursor:'pointer'}}/>
                )}
            </div>
        </div>
    )
}

export default ColorSelect
