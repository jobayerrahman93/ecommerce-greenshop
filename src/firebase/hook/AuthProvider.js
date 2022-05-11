import React, { createContext } from 'react';
import useFirebase from './useFirebase.js';


 export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const allContextVal = useFirebase();

    return (
        <AuthContext.Provider value={allContextVal}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;