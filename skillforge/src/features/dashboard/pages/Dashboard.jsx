import { motion } from 'framer-motion';
import useAuthStore from '../../../store/authStore';

// Mock Data
import { 
  mockStats, 
  mockRecentActivity, 
  mockLearningPaths,
  mockCurrentLearning,
  mockRightPanel
} from '../../../data/dashboard';

// Core Widgets
import WelcomeHero from '../components/WelcomeHero';
import ContinueLearningCard from '../components/ContinueLearningCard';
import QuickStats from '../components/QuickStats';
import DailyGoal from '../components/DailyGoal';
import RecentActivity from '../components/RecentActivity';
import LearningPaths from '../components/LearningPaths';

// Right Panel Widgets
import DailyChallenge from '../components/widgets/DailyChallenge';
import QuoteCard from '../components/widgets/QuoteCard';
import LeaderboardPreview from '../components/widgets/LeaderboardPreview';
import UpcomingUnlock from '../components/widgets/UpcomingUnlock';

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1920px] mx-auto">

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">

        {/* Left & Center Content (Main Dashboard Area) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 xl:col-span-8 2xl:col-span-9 flex flex-col gap-6 xl:gap-8"
        >
          {/* Hero Section */}
          <WelcomeHero user={user} />

          {/* Quick Stats Grid */}
          <QuickStats stats={mockStats} />

          {/* Main Content Split */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 items-start">
            {/* Left Column in Main Area */}
            <div className="xl:col-span-2 space-y-6 xl:space-y-8">
              <ContinueLearningCard current={mockCurrentLearning} />
              <LearningPaths paths={mockLearningPaths} />
            </div>

            {/* Right Column in Main Area */}
            <div className="xl:col-span-1 space-y-6 xl:space-y-8">
              <DailyGoal user={user} />
              <RecentActivity activities={mockRecentActivity} />
            </div>
          </div>
        </motion.div>

        {/* Right Utility Panel */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 xl:col-span-4 2xl:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 content-start"
        >
          <DailyChallenge challenge={mockRightPanel.dailyChallenge} />
          <QuoteCard quote={mockRightPanel.quote} />
          <LeaderboardPreview leaderboard={mockRightPanel.leaderboardPreview} user={user} />
          <UpcomingUnlock unlock={mockRightPanel.upcomingUnlock} />
        </motion.aside>

      </div>
    </div>
  );
}
