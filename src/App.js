import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import RoomList from './components/Room/RoomList';
import RoomDetails from './components/Room/RoomDetails';
import StudentList from './components/Student/StudentList';
import StudentProfile from './components/Student/StudentProfile';

import { AuthProvider } from './contexts/AuthContext';
import useAuth from './hooks/useAuth';

// Protected Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
    const { isAuthenticated, user } = useAuth();
    const isAllowed = isAuthenticated && (allowedRoles.includes(user?.role) || user?.role === 'admin');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (allowedRoles.length > 0 && !isAllowed) {
        return <Navigate to="/dashboard" replace />; // Redirect to general dashboard or unauthorized page
    }
    return element;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />

                        {/* Protected Routes */}
                        <Route
                            path="/dashboard"
                            element={<ProtectedRoute element={<StudentPage />} allowedRoles={['student']} />}
                        />
                        <Route
                            path="/admin"
                            element={<ProtectedRoute element={<AdminPage />} allowedRoles={['admin']} />}
                        />
                         <Route
                            path="/rooms"
                            element={<RoomList />} // Public or students can view rooms
                        />
                        <Route
                            path="/rooms/:roomId"
                            element={<RoomDetails />} // Public or students can view details
                        />
                        <Route
                            path="/students"
                            element={<ProtectedRoute element={<StudentList />} allowedRoles={['admin']} />}
                        />
                        <Route
                            path="/students/:studentId"
                            element={<ProtectedRoute element={<StudentProfile />} allowedRoles={['admin', 'student']} />}
                        />
                         <Route
                            path="/profile" // Generic profile link, could redirect based on role
                            element={<ProtectedRoute element={<StudentProfile />} allowedRoles={['student']} />}
                        />

                        {/* Fallback for unmatched routes */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;