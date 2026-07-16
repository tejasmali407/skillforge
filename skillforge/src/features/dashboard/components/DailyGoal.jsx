import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target } from 'lucide-react';

export default function DailyGoal({ user }) {
  if (!user) return null;

  const targetXp = user.targetXp || 5000;
  const progress = Math.min((user.xp / targetXp) * 100, 100);
  const strokeDasharray = 283; // 2 * PI * 45
  const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="h-full"
    >
      <Card className="h-full shadow-sm border-border/50 bg-background/60 backdrop-blur-md">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
          
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Daily Goal</h3>
          </div>

          <div className="relative w-32 h-32 mb-4">
            {/* Background Circle */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/30"
              />
              {/* Progress Circle */}
              <motion.circle
                initial={{ strokeDashoffset: strokeDasharray }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                className="drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 equivalent */}
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold tracking-tighter">{progress.toFixed(0)}%</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xl font-extrabold">{user.xp} <span className="text-sm text-muted-foreground font-medium">/ {targetXp} XP</span></p>
            <p className="text-sm font-medium text-muted-foreground">
              {progress >= 100 
                ? "Goal crushed! Great job!" 
                : "Keep pushing, you're almost there!"}
            </p>
          </div>
          
        </CardContent>
      </Card>
    </motion.div>
  );
}
