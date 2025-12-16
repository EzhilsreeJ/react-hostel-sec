import React, { useState, useEffect } from 'react';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Mock data - replace with API call in a real app
    const mockRooms = [
        { id: 1, roomNumber: 'A101', capacity: 2, currentOccupancy: 1, type: 'Double Sharing' },
        { id: 2, roomNumber: 'A102', capacity: 3, currentOccupancy: 3, type: 'Triple Sharing' },
        { id: 3, roomNumber: 'B201', capacity: 2, currentOccupancy: 0, type: 'Double Sharing' },
        { id: 4, roomNumber: 'B202', capacity: 4, currentOccupancy: 2, type: 'Quad Sharing' },
        { id: 5, roomNumber: 'C301', capacity: 2, currentOccupancy: 1, type: 'Double Sharing' },
    ];

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setRooms(mockRooms);
            setLoading(false);
        }, 500);
    }, []);

    const handleViewDetails = (roomId) => {
        navigate(`/rooms/${roomId}`);
    };

    const handleEditRoom = (roomId) => {
        console.log(`Editing room ${roomId}`);
        // Navigate to edit room page
    };

    const handleDeleteRoom = (roomId) => {
        console.log(`Deleting room ${roomId}`);
        // Implement delete logic
    };

    const handleAddRoom = () => {
        navigate('/admin/rooms/new'); // Assuming an admin route for adding rooms
    };

    if (loading) return <p>Loading rooms...</p>;
    if (error) return <p>Error loading rooms: {error}</p>;

    // Determine if the current user is an admin to show edit/delete/add buttons
    // This should ideally come from AuthContext or API response
    const isAdmin = true; // Placeholder for admin check

    return (
        <div className="table-container">
            <h2 className="page-title">Hostel Rooms</h2>
            {isAdmin && (
                <div style={{ marginBottom: '20px' }}>
                    <Button onClick={handleAddRoom} className="btn-primary">Add New Room</Button>
                </div>
            )}
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Occupancy</th>
                        <th>Status</th>
                        {isAdmin && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {rooms.length > 0 ? (
                        rooms.map(room => (
                            <tr key={room.id}>
                                <td>{room.roomNumber}</td>
                                <td>{room.type}</td>
                                <td>{room.capacity}</td>
                                <td>{room.currentOccupancy}/{room.capacity}</td>
                                <td>
                                    {room.currentOccupancy < room.capacity ? (
                                        <span style={{ color: 'green' }}>Available</span>
                                    ) : (
                                        <span style={{ color: 'red' }}>Full</span>
                                    )}
                                </td>
                                {isAdmin && (
                                    <td className="actions">
                                        <Button onClick={() => handleViewDetails(room.id)} className="btn-secondary">View</Button>
                                        <Button onClick={() => handleEditRoom(room.id)} className="btn-edit">Edit</Button>
                                        <Button onClick={() => handleDeleteRoom(room.id)} className="btn-danger">Delete</Button>
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={isAdmin ? 6 : 5} style={{ textAlign: 'center' }}>No rooms available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default RoomList;