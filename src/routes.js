// This file is typically not used in create-react-app with react-router-dom v6.
// Routing is usually handled directly in App.js.
// If you were using a different routing setup or a library that requires this,
// you would define your routes here.

// Example structure if it were used:
/*
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';

const routes = [
    {
        path: "/",
        element: <HomePage />,
        exact: true,
        protected: false,
    },
    {
        path: "/login",
        element: <LoginPage />,
        protected: false,
    },
    {
        path: "/register",
        element: <RegisterPage />,
        protected: false,
    },
    {
        path: "/dashboard",
        element: <StudentPage />,
        protected: true,
        roles: ['student']
    },
    {
        path: "/admin",
        element: <AdminPage />,
        protected: true,
        roles: ['admin']
    },
    // ... other routes
];

export default routes;
*/

// For this project, routes are defined in App.js