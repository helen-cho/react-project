import React, { useState } from 'react'
import { ColorContext } from './ColorContext';

const ColorProvider = ({ children }) => {
    const [big, setBig] = useState('black');
    const [small, setSmall] = useState('small');

    return (
        <ColorContext.Provider value={{big, setBig, small, setSmall}}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider
