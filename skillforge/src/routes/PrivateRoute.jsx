import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import useAuthStore from '../store/authStore';
import { Loader2 } from 'lucide-react';

function PrivateRoute() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default PrivateRoute;
