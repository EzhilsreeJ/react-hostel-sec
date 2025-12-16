import React, { useState, useEffect } from 'react';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Mock data - replace with API call in a real app
    const mockStudents = [
        { id: 101, name: 'Alice Smith', studentId: 'SH12345', roomNumber: 'A101', contact: 'alice@example.com', status: 'Active' },
        { id: 102, name: 'Bob Johnson', studentId: 'SH67890', roomNumber: 'A102', contact: 'bob@example.com', status: 'Active' },
        { id: 103, name: 'Charlie Brown', studentId: 'SH11223', roomNumber: 'A102', contact: 'charlie@example.com', status: 'Active' },
        { id: 104, name: 'Diana Prince', studentId: 'SH44556', roomNumber: 'B202', contact: 'diana@example.com', status: 'Active' },
        { id: 105, name: 'Ethan Hunt', studentId: 'SH77889', roomNumber: 'B202', contact: 'ethan@example.com', status: 'Inactive' },
    ];

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setStudents(mockStudents);
            setLoading(false);
        }, 500);
    }, []);

    const handleViewProfile = (studentId) => {
        navigate(`/students/${studentId}`); // Assuming a route like /students/:studentId
    };

    const handleEditStudent = (studentId) => {
        console.log(`Editing student ${studentId}`);
        // Navigate to edit student page
    };

    const handleDeleteStudent = (studentId) => {
        console.log(`Deleting student ${studentId}`);
        // Implement delete logic
    };

    const handleAddStudent = () => {
        navigate('/admin/students/new'); // Assuming an admin route for adding students
    };

    if (loading) return <p>Loading students...</p>;
    if (error) return <p>Error loading students: {error}</p>;

    // Determine if the current user is an admin to show edit/delete/add buttons
    const isAdmin = true; // Placeholder for admin check

    return (
        <div className="table-container">
            <h2 className="page-title">Student Records</h2>
            {isAdmin && (
                <div style={{ marginBottom: '20px' }}>
                    <Button onClick={handleAddStudent} className="btn-primary">Add New Student</Button>
                </div>
            )}
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Room</th>
                        <th>Contact</th>
                        <th>Status</th>
                        {isAdmin && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(student => (
                            <tr key={student.id}>
                                <td>{student.studentId}</td>
                                <td>{student.name}</td>
                                <td>{student.roomNumber || 'Unassigned'}</td>
                                <td>{student.contact}</td>
                                <td>
                                    <span style={{ color: student.status === 'Active' ? 'green' : 'orange' }}>
                                        {student.status}
                                    </span>
                                </td>
                                {isAdmin && (
                                    <td className="actions">
                                        <Button onClick={() => handleViewProfile(student.studentId)} className="btn-secondary">View</Button>
                                        <Button onClick={() => handleEditStudent(student.id)} className="btn-edit">Edit</Button>
                                        <Button onClick={() => handleDeleteStudent(student.id)} className="btn-danger">Delete</Button>
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={isAdmin ? 6 : 5} style={{ textAlign: 'center' }}>No student records found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;