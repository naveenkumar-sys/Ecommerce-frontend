import React, { createContext, useState } from 'react';


export const authContext = createContext();
const AuthProvider = ({ children }) => {
    //state for user already logged in or not , if logged in we should get that user details from local storage and save to state or return null
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    // this state is for token 
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    )

    //when user is logged in data will come , if we want to set the data to the state because if nobody logged in initially we should set the data to local storage and update the state
    const login = (token ,data) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data));

        setToken(token);
        setUser(data);
    }
    //for all case only one user will be logged in same time so we delete or remove the items 
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setToken(null);
        setUser(null);
    }
    return (
        <div>
            <authContext.Provider value={{ user, token, login, logout }}>
                {children}
            </authContext.Provider>

        </div>
    );
};

export default AuthProvider;