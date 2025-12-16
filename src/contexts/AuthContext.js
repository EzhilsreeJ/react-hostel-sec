import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAuthenticated(true);
            // Optionally, you might want to validate the token/session with a backend call here
        }
    }, []);

    const login = async (username, password) => {
        // In a real app, this would be an API call to your backend for authentication
        // For demonstration purposes, we'll simulate a successful login for 'admin' and 'user'
        return new Promise((resolve) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'admin123') {
                    const userData = { username: 'admin', role: 'admin' };
                    setUser(userData);
                    setIsAuthenticated(true);
                    localStorage.setItem('user', JSON.stringify(userData));
                    resolve(true);
                } else if (username === 'user' && password === 'user123') {
                    const userData = { username: 'user', role: 'student' };
                    setUser(userData);
                    setIsAuthenticated(true);
                    localStorage.setItem('user', JSON.stringify(userData));
                    resolve(true);
                } else {
                    resolve(false); // Authentication failed
                }
            }, 500); // Simulate network delay
        });
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        // In a real app, you might also clear tokens or session data from backend
    };

    const authContextValue = {
        user,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default useAuth;