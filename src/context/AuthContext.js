import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase'

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) =>{

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])

    const signup = (email, password, confirmPassword) => {
        return auth.createUserWithEmailAndPassword(email, password, confirmPassword);
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }
    const logout = () => auth.signOut();
    const value = { signup, login, logout, currentUser };
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}