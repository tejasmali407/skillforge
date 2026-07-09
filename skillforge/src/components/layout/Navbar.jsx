import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="font-bold text-xl">SkillForge</div>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Home
          </NavLink>
        </li>
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
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
