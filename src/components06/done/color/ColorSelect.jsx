import React, { useContext } from 'react'
import { ColorContext } from './ColorContext';

const ColorSelect = () => {
    const colors =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const { setBig, setSmall } = useContext(ColorContext);

    const onClickLeft = (color) => {
        setBig(color);
    }

    const onClickRight = (e, color) => {
        e.preventDefault();
        setSmall(color);
    }

    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{ display:'flex' }}>
                { colors.map(color=>
                    <div onContextMenu={(e)=>onClickRight(e, color)} onClick={()=>onClickLeft(color)} 
                        key={color} style={{background:color, width:'30px', height:'30px', cursor:'pointer'}}/>
                )}
            </div>
        </div>
    )
}

export default ColorSelect
