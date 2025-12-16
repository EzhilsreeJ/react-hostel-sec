import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Common/Button';

const RoomDetails = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mock data for room details
    const mockRoomData = {
        '1': { id: 1, roomNumber: 'A101', type: 'Double Sharing', capacity: 2, currentOccupancy: 1, description: 'A cozy double sharing room with a view.', amenities: ['Wi-Fi', 'Fan', 'Attached Bathroom'] },
        '2': { id: 2, roomNumber: 'A102', type: 'Triple Sharing', capacity: 3, currentOccupancy: 3, description: 'Spacious room for three students.', amenities: ['Wi-Fi', 'Fan', 'Common Bathroom'] },
        '3': { id: 3, roomNumber: 'B201', type: 'Double Sharing', capacity: 2, currentOccupancy: 0, description: 'Newly renovated double room.', amenities: ['Wi-Fi', 'AC', 'Attached Bathroom'] },
        '4': { id: 4, roomNumber: 'B202', type: 'Quad Sharing', capacity: 4, currentOccupancy: 2, description: 'Room for four with basic amenities.', amenities: ['Wi-Fi', 'Fan'] },
        '5': { id: 5, roomNumber: 'C301', type: 'Double Sharing', capacity: 2, currentOccupancy: 1, description: 'Standard double room on the third floor.', amenities: ['Wi-Fi', 'Fan', 'Attached Bathroom'] },
    };

    useEffect(() => {
        // Simulate fetching room details
        setTimeout(() => {
            const foundRoom = mockRoomData[roomId];
            if (foundRoom) {
                setRoom(foundRoom);
            } else {
                setError('Room not found');
            }
            setLoading(false);
        }, 500);
    }, [roomId]);

    if (loading) return <p>Loading room details...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!room) return null; // Should not happen if loading/error are handled

    // Placeholder for admin check
    const isAdmin = true;

    return (
        <div className="form-container">
            <h2 className="page-title">Room Details: {room.roomNumber}</h2>
            <div className="room-details-content">
                <p><strong>Room Number:</strong> {room.roomNumber}</p>
                <p><strong>Type:</strong> {room.type}</p>
                <p><strong>Capacity:</strong> {room.capacity}</p>
                <p><strong>Occupancy:</strong> {room.currentOccupancy}/{room.capacity}</p>
                <p><strong>Status:</strong> {room.currentOccupancy < room.capacity ? <span style={{ color: 'green' }}>Available</span> : <span style={{ color: 'red' }}>Full</span>}</p>
                <p><strong>Description:</strong> {room.description}</p>
                <p><strong>Amenities:</strong></p>
                <ul>
                    {room.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>
            </div>
            <div style={{ marginTop: '20px' }}>
                {isAdmin && (
                    <Button onClick={() => navigate(`/admin/rooms/edit/${room.id}`)} className="btn-secondary" style={{ marginRight: '10px' }}>Edit Room</Button>
                )}
                <Button onClick={() => navigate('/rooms')} className="btn-primary">Back to Rooms</Button>
            </div>
        </div>
    );
};

export default RoomDetails;