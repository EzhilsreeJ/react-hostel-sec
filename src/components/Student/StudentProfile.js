import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Common/Button';

const StudentProfile = () => {
    const { studentId } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mock data for student profiles
    const mockStudentProfiles = {
        'SH12345': { id: 101, name: 'Alice Smith', studentId: 'SH12345', roomNumber: 'A101', contact: 'alice@example.com', email: 'alice.smith@saveetha.edu', phone: '9876543210', dob: '2003-05-15', address: '123 Hostel Lane', feesPaid: 5000, totalFees: 10000 },
        'SH67890': { id: 102, name: 'Bob Johnson', studentId: 'SH67890', roomNumber: 'A102', contact: 'bob@example.com', email: 'bob.johnson@saveetha.edu', phone: '1234567890', dob: '2004-01-20', address: '456 Hostel Way', feesPaid: 7500, totalFees: 10000 },
        'SH11223': { id: 103, name: 'Charlie Brown', studentId: 'SH11223', roomNumber: 'A102', contact: 'charlie@example.com', email: 'charlie.brown@saveetha.edu', phone: '1122334455', dob: '2002-11-10', address: '789 Hostel Road', feesPaid: 10000, totalFees: 10000 },
        'SH44556': { id: 104, name: 'Diana Prince', studentId: 'SH44556', roomNumber: 'B202', contact: 'diana@example.com', email: 'diana.prince@saveetha.edu', phone: '9988776655', dob: '2003-08-01', address: '101 Hostel Avenue', feesPaid: 2000, totalFees: 10000 },
        'SH77889': { id: 105, name: 'Ethan Hunt', studentId: 'SH77889', roomNumber: 'B202', contact: 'ethan@example.com', email: 'ethan.hunt@saveetha.edu', phone: '5544332211', dob: '2004-02-28', address: '202 Hostel Drive', feesPaid: 9000, totalFees: 10000 },
    };

    useEffect(() => {
        // Simulate fetching student profile data
        setTimeout(() => {
            const foundStudent = mockStudentProfiles[studentId];
            if (foundStudent) {
                setStudent(foundStudent);
            } else {
                setError('Student profile not found');
            }
            setLoading(false);
        }, 500);
    }, [studentId]);

    if (loading) return <p>Loading student profile...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!student) return null;

    // Placeholder for admin check
    const isAdmin = true;

    return (
        <div className="form-container">
            <h2 className="page-title">Student Profile: {student.name}</h2>
            <div className="student-profile-content">
                <p><strong>Student ID:</strong> {student.studentId}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Room Number:</strong> {student.roomNumber || 'Unassigned'}</p>
                <p><strong>Contact Email:</strong> {student.contact}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
                <p><strong>Date of Birth:</strong> {student.dob}</p>
                <p><strong>Address:</strong> {student.address}</p>
                <p><strong>Fees Paid:</strong> ${student.feesPaid}</p>
                <p><strong>Total Fees:</strong> ${student.totalFees}</p>
                <p><strong>Fee Balance:</strong> <span style={{ color: student.feesPaid < student.totalFees ? 'red' : 'green', fontWeight: 'bold' }}>
                    ${student.totalFees - student.feesPaid}
                </span></p>
            </div>
            <div style={{ marginTop: '20px' }}>
                {isAdmin && (
                    <Button onClick={() => navigate(`/admin/students/edit/${student.id}`)} className="btn-secondary" style={{ marginRight: '10px' }}>Edit Profile</Button>
                )}
                <Button onClick={() => navigate('/students')} className="btn-primary">Back to Students</Button>
            </div>
        </div>
    );
};

export default StudentProfile;