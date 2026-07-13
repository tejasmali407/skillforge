import { NavLink, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { logout } from '../../services/authService';
import { Button } from '@/components/ui/button';

function Navbar() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      // Error is handled by toast in authService
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="font-bold text-xl">SkillForge</div>
      <ul className="flex items-center space-x-4">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Home
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                Dashboard
              </NavLink>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-sm font-medium">Hello, {user.name || 'User'}</span>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
