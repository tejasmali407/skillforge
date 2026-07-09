import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function PrivateRoute() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default PrivateRoute;
