import React from 'react';

const StudentDashboard = () => {
    // In a real application, you would fetch student-specific data here
    const studentInfo = {
        name: "John Doe",
        studentId: "SH12345",
        roomNumber: "A101",
        dueDate: "2024-08-15",
        balance: "$150"
    };

    return (
        <div className="dashboard-container">
            <h2 className="page-title">Welcome, {studentInfo.name}!</h2>
            <div className="dashboard">
                <div className="dashboard-card">
                    <i className="fas fa-user"></i>
                    <h3>My Profile</h3>
                    <p>View and update your personal details.</p>
                    {/* Link to profile page would be here */}
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-bed"></i>
                    <h3>My Room</h3>
                    <p>Assigned Room: <strong>{studentInfo.roomNumber}</strong></p>
                    {/* Link to room details could be here */}
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-dollar-sign"></i>
                    <h3>Fee Status</h3>
                    <p>Amount Due: <strong>{studentInfo.balance}</strong></p>
                    <p>Due Date: <strong>{studentInfo.dueDate}</strong></p>
                    {/* Link to fee payment would be here */}
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-bell"></i>
                    <h3>Announcements</h3>
                    <p>Check for hostel announcements and notices.</p>
                    {/* Link to announcements would be here */}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;