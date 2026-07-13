import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { 
  Gamepad2, 
  Map, 
  FolderKanban, 
  TerminalSquare, 
  Trophy, 
  Zap, 
  Coins, 
  Award, 
  Flame, 
  Moon 
} from 'lucide-react';

const featuresData = [
  {
    title: 'Gamified Learning',
    description: 'Learn through an interactive, game-like experience that keeps you motivated and engaged.',
    icon: Gamepad2,
  },
  {
    title: 'Roadmaps',
    description: 'Follow clear, structured paths designed by industry experts to reach your career goals.',
    icon: Map,
  },
  {
    title: 'Mini Projects',
    description: 'Apply what you learn immediately by building real-world projects and portfolio pieces.',
    icon: FolderKanban,
  },
  {
    title: 'Playground',
    description: 'Write, run, and test your code directly in the browser with our integrated coding environment.',
    icon: TerminalSquare,
  },
  {
    title: 'Leaderboards',
    description: 'Compete with friends and other learners globally to climb the ranks and showcase your skills.',
    icon: Trophy,
  },
  {
    title: 'XP System',
    description: 'Earn Experience Points (XP) for completing lessons, solving challenges, and helping others.',
    icon: Zap,
  },
  {
    title: 'Virtual Coins',
    description: 'Collect coins to unlock premium avatars, profile themes, and exclusive community badges.',
    icon: Coins,
  },
  {
    title: 'Certificates',
    description: 'Earn verifiable certificates upon completing roadmaps to boost your resume and LinkedIn.',
    icon: Award,
  },
  {
    title: 'Daily Streak',
    description: 'Build a consistent learning habit. Keep your streak alive to earn bonus multipliers and rewards.',
    icon: Flame,
  },
  {
    title: 'Dark Mode',
    description: 'Easy on the eyes. Beautifully crafted dark mode experience for those late-night coding sessions.',
    icon: Moon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Everything you need</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Features that make learning <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              addictive
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We've combined the best practices of education and game design to create an ecosystem where you actually want to learn every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
