import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useAuth();

    // Determine which links to show based on authentication status and role (simplified)
    // In a real app, you would have user roles from authentication context
    const isAdmin = location.pathname.startsWith('/admin'); // Simple check for admin path

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">Saveetha Hostel</Link>
                {isAuthenticated ? (
                    <ul className="navbar-nav">
                        {isAdmin && ( // Only show Admin link if user is admin (simplified logic)
                            <li>
                                <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
                        </li>
                        {/* Add other student-specific links here if needed */}
                        <li>
                            <Link to="/rooms" className={location.pathname === '/rooms' ? 'active' : ''}>Rooms</Link>
                        </li>
                        <li>
                            <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link>
                        </li>
                        <li>
                            <button onClick={logout} className="logout-button">Logout</button>
                        </li>
                    </ul>
                ) : (
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Register</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;