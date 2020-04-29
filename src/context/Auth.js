import React, { createContext, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth'
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = useAuth();
    const [logado,setLogado] = useState();
    useEffect(() => {
        setLogado(auth)
    },[logado,auth])
    
    return(
        <AuthContext.Provider value={{logado}}>
            {children}
        </AuthContext.Provider>
    )
}