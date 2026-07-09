const fs = require('fs');
const path = require('path');

const baseDir = 'd:/skillforge/skillforge/src';

const files = {
  'routes/AppRoutes.jsx': `import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from '../features/landing/pages/Home';
import Login from '../features/auth/pages/Login';
import Signup from '../features/auth/pages/Signup';
import Dashboard from '../features/dashboard/pages/Dashboard';
import NotFound from '../features/notfound/pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="*" element={<PublicRoute><NotFound /></PublicRoute>} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
`,
  'routes/PrivateRoute.jsx': `import { Navigate, Outlet } from 'react-router-dom';
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
`,
  'routes/PublicRoute.jsx': `function PublicRoute({ children }) {
  return children;
}

export default PublicRoute;
`,
  'components/layout/Layout.jsx': `import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
`,
  'components/layout/Navbar.jsx': `import { NavLink } from 'react-router-dom';

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
`,
  'components/layout/Footer.jsx': `function Footer() {
  return (
    <footer className="p-4 text-center bg-gray-100">
      <p>&copy; 2026 SkillForge</p>
    </footer>
  );
}

export default Footer;
`,
  'features/landing/pages/Home.jsx': `function Home() {
  return (
    <h1>Home Page</h1>
  );
}

export default Home;
`,
  'features/auth/pages/Login.jsx': `function Login() {
  return (
    <h1>Login Page</h1>
  );
}

export default Login;
`,
  'features/auth/pages/Signup.jsx': `function Signup() {
  return (
    <h1>Signup Page</h1>
  );
}

export default Signup;
`,
  'features/dashboard/pages/Dashboard.jsx': `function Dashboard() {
  return (
    <h1>Dashboard</h1>
  );
}

export default Dashboard;
`,
  'features/notfound/pages/NotFound.jsx': `function NotFound() {
  return (
    <h1>404 Page Not Found</h1>
  );
}

export default NotFound;
`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content);
}
console.log('Files successfully written.');
