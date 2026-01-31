import React from 'react'

const ColorSelect = () => {
    const colors =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{ display:'flex' }}>
                { colors.map(color=>
                    <div key={color} style={{background:color, width:'30px', height:'30px', cursor:'pointer'}}/>
                )}
            </div>
        </div>
    )
}

export default ColorSelect
