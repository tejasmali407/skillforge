import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from '../features/landing/pages/Home';
import Login from '../features/auth/pages/Login';
import Signup from '../features/auth/pages/Signup';
import Dashboard from '../features/dashboard/pages/Dashboard';
import Profile from '../features/profile/pages/Profile';
import Settings from '../features/settings/pages/Settings';
import Achievements from '../features/achievements/pages/Achievements';
import LearningPath from '../features/learning/pages/LearningPath';
import Courses from '../features/courses/pages/Courses';
import Playground from '../features/playground/pages/Playground';
import Quizzes from '../features/quizzes/pages/Quizzes';
import Rewards from '../features/rewards/pages/Rewards';
import Leaderboard from '../features/leaderboard/pages/Leaderboard';
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
        <Route path="/learning" element={<LearningPath />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

