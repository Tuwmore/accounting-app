import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from './auth-context';

const ProtectedRoute: React.FC = () => {
    const { user } = useAuthContext();

    if (!user) {
        // If no user is logged in, redirect to login page
        return <Navigate to="/log-in" />;
      }
    
      // Render child components if user is logged in
      return <Outlet />;
    };

export default ProtectedRoute;