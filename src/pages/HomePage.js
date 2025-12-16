import React from 'react';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="page-title" style={{ borderBottom: 'none', marginBottom: '30px' }}>Welcome to Saveetha Hostel Management</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                Your comprehensive solution for managing hostel life efficiently.
                Easily track students, rooms, fees, and more.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link to="/login">
                    <Button className="btn-primary" text="Login" />
                </Link>
                <Link to="/register">
                    <Button className="btn-secondary" text="Register" />
                </Link>
            </div>
        </div>
    );
};

export default HomePage;