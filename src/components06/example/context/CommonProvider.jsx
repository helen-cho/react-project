import React, { useState } from 'react'
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';

const CommonProvider = ({children}) => {
    const [dark, setDark] = useState();
    const [user, setUser] = useState({
        isLogin:false,
        name:'사용자'
    });

    return (
        <UserContext.Provider value={{user, setUser}}>
            <ThemeContext.Provider value={{dark, setDark}}>
                {children}
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}
export default CommonProvider