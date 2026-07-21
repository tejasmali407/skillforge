import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

// Data
import { learningPathData, comingSoonPaths } from '../data/mockLearningData';

// Components
import LearningProgress from '../components/LearningProgress';
import ContinueLearning from '../components/ContinueLearning';
import RoadmapTimeline from '../components/RoadmapTimeline';
import ComingSoonPaths from '../components/ComingSoonPaths';

export default function LearningPath() {
  // Find current module and lesson for the Continue Learning card
  const currentModule = learningPathData.modules.find(m => m.status === 'current') || learningPathData.modules[0];
  const currentLesson = currentModule.lessons.find(l => !l.completed) || currentModule.lessons[0];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1920px] mx-auto min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 sm:mb-8 font-medium">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
          <Home className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">Learning Path</span>
      </nav>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Timeline (Takes up more space on desktop) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              {learningPathData.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {learningPathData.description}
            </p>
          </motion.div>

          {/* Continue Learning Widget (Mobile shows it here, Desktop can show it anywhere, let's keep it top of the timeline) */}
          <div className="lg:hidden">
            <ContinueLearning module={currentModule} lesson={currentLesson} />
          </div>

          <div className="lg:hidden">
            <LearningProgress data={learningPathData} />
          </div>

          {/* Roadmap Modules */}
          <div className="pt-4">
            <RoadmapTimeline modules={learningPathData.modules} />
          </div>

          <hr className="border-border/50 my-10" />

          {/* Coming Soon */}
          <ComingSoonPaths paths={comingSoonPaths} />
          
        </div>

        {/* Right Column: Progress & Sticky Widgets */}
        <div className="hidden lg:block lg:col-span-4 space-y-8">
          <div className="sticky top-28 space-y-8">
            <ContinueLearning module={currentModule} lesson={currentLesson} />
            <LearningProgress data={learningPathData} />
          </div>
        </div>

      </div>
    </div>
  );
}
