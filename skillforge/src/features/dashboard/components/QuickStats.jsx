import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FolderDot, Percent, Trophy, TrendingUp, Star } from 'lucide-react';

const statsConfig = [
  { key: 'todayXp', label: "Today's XP", icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-500/10', trend: '+12%', trendUp: true },
  { key: 'currentLevel', label: 'Current Level', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-500/10', trend: 'Next: 5k XP', trendUp: true },
  { key: 'lessonsCompleted', label: 'Lessons', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10', trend: '+3 this week', trendUp: true },
  { key: 'projectsCompleted', label: 'Projects', icon: FolderDot, color: 'text-emerald-500', bg: 'bg-emerald-500/10', trend: '+1 this month', trendUp: true },
  { key: 'quizScore', label: 'Avg Score', icon: Percent, color: 'text-purple-500', bg: 'bg-purple-500/10', suffix: '%', trend: '+2.5%', trendUp: true },
  { key: 'achievements', label: 'Awards', icon: Trophy, color: 'text-pink-500', bg: 'bg-pink-500/10', trend: '1 New', trendUp: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function QuickStats({ stats }) {
  if (!stats) return null;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
    >
      {statsConfig.map((item) => {
        const Icon = item.icon;
        const value = stats[item.key];
        
        return (
          <motion.div key={item.key} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
            <Card className="border-border/40 shadow-sm bg-background/60 backdrop-blur-md hover:shadow-md hover:border-border/80 transition-all rounded-2xl h-full">
              <CardContent className="p-5 flex flex-col justify-between h-full">
                
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${item.bg}`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  {item.trend && (
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.trendUp ? 'bg-emerald-500/10 text-emerald-600' : 'bg-destructive/10 text-destructive'}`}>
                      {item.trend}
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-2xl font-extrabold tracking-tight mb-0.5 text-foreground">
                    {value}{item.suffix}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </div>
                
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
