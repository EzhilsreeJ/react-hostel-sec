import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            <h2 className="page-title">Admin Dashboard</h2>
            <div className="dashboard">
                <div className="dashboard-card">
                    <i className="fas fa-users"></i> {/* Font Awesome Icon */}
                    <h3>Manage Students</h3>
                    <p>View, add, and edit student records.</p>
                    <Link to="/admin/students" className="btn btn-primary">Go to Students</Link>
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-bed"></i>
                    <h3>Manage Rooms</h3>
                    <p>View, add, and manage hostel rooms.</p>
                    <Link to="/admin/rooms" className="btn btn-primary">Go to Rooms</Link>
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-dollar-sign"></i>
                    <h3>Manage Fees</h3>
                    <p>Track and manage student fee payments.</p>
                    <Link to="/admin/fees" className="btn btn-primary">Go to Fees</Link>
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-calendar-alt"></i>
                    <h3>Manage Bookings</h3>
                    <p>Oversee room bookings and allocations.</p>
                    <Link to="/admin/bookings" className="btn btn-primary">Go to Bookings</Link>
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-building"></i>
                    <h3>Hostel Overview</h3>
                    <p>Get a summary of hostel occupancy and status.</p>
                    <Link to="/admin/overview" className="btn btn-primary">View Overview</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;