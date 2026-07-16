import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap, Shield, Crown, Code, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first lesson.',
      icon: Star,
      unlocked: true,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      title: 'Quick Learner',
      description: 'Finish a module in under 24 hours.',
      icon: Zap,
      unlocked: true,
      color: 'from-blue-400 to-indigo-500',
    },
    {
      id: 3,
      title: 'Bug Squasher',
      description: 'Solve 10 coding challenges without hints.',
      icon: Code,
      unlocked: true,
      color: 'from-green-400 to-emerald-600',
    },
    {
      id: 4,
      title: 'Consistency is Key',
      description: 'Maintain a 7-day learning streak.',
      icon: Target,
      unlocked: false,
      color: 'from-purple-400 to-pink-500',
      progress: 4,
      total: 7,
    },
    {
      id: 5,
      title: 'Master Craftsman',
      description: 'Complete your first major project.',
      icon: Crown,
      unlocked: false,
      color: 'from-amber-400 to-yellow-600',
      progress: 0,
      total: 1,
    },
    {
      id: 6,
      title: 'Community Pillar',
      description: 'Help 5 students in the forums.',
      icon: Shield,
      unlocked: false,
      color: 'from-cyan-400 to-blue-600',
      progress: 2,
      total: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1920px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              Achievements
            </h1>
            <p className="text-muted-foreground mt-2">Track your learning milestones and earned badges.</p>
          </div>
          
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold flex items-center gap-2 w-fit">
            <Award className="w-5 h-5" />
            3 / 24 Unlocked
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div 
                key={achievement.id}
                variants={itemVariants}
                className={`relative overflow-hidden bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${!achievement.unlocked ? 'opacity-75 grayscale-[0.5]' : ''}`}
              >
                {/* Background Accent */}
                {achievement.unlocked && (
                  <div className={`absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-20 blur-2xl rounded-full`} />
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${achievement.unlocked ? 'bg-gradient-to-br ' + achievement.color + ' text-white shadow-lg' : 'bg-muted text-muted-foreground'}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg truncate">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{achievement.description}</p>
                    
                    {!achievement.unlocked && achievement.total > 1 && (
                      <div className="mt-4 space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground">{achievement.progress} / {achievement.total}</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${achievement.color} rounded-full`}
                            style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </div>
  );
}
