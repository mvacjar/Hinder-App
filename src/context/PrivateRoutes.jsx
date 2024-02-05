import { useAuth } from './context';
import { Outlet, Navigate } from 'react-router';

const PrivateRoutes = () => {
  const { loggedInUser } = useAuth();

  return loggedInUser ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
