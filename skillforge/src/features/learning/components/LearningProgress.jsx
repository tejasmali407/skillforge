import { motion } from 'framer-motion';
import { Target, Zap, Trophy, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LearningProgress({ data }) {
  const progressPercent = Math.min((data.completedLessons / data.totalLessons) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-md">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Path Progress</h3>
          </div>

          <div className="relative w-40 h-40 mb-6">
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
              <motion.circle
                initial={{ strokeDashoffset: 283 }}
                animate={{ strokeDashoffset: 283 - (283 * progressPercent) / 100 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="283"
                className="drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold tracking-tighter">{progressPercent.toFixed(0)}%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-muted/30 p-3 rounded-xl border border-border/50 text-center">
              <BookOpen className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Lessons</p>
              <p className="text-lg font-bold">{data.completedLessons} <span className="text-sm text-muted-foreground">/ {data.totalLessons}</span></p>
            </div>
            <div className="bg-muted/30 p-3 rounded-xl border border-border/50 text-center">
              <Zap className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Streak</p>
              <p className="text-lg font-bold">{data.streak} <span className="text-sm text-muted-foreground">Days</span></p>
            </div>
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}
