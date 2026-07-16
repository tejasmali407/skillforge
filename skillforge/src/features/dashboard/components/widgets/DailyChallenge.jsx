import { Card, CardContent } from '@/components/ui/card';
import { Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DailyChallenge({ challenge }) {
  if (!challenge) return null;

  const progressPercentage = (challenge.progress / challenge.total) * 100;

  return (
    <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-md overflow-hidden">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-orange-500/10 rounded-lg">
            <Target className="w-4 h-4 text-orange-500" />
          </div>
          <h3 className="font-bold text-sm text-foreground">Daily Challenge</h3>
        </div>
        
        <p className="text-sm font-semibold mb-3">{challenge.title}</p>
        
        <div className="space-y-2 mb-3">
          <div className="flex justify-between text-[11px] font-semibold text-muted-foreground">
            <span>{challenge.progress} / {challenge.total}</span>
            <span>{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-orange-500 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-semibold text-orange-600 bg-orange-500/10 px-2 py-1.5 rounded-md w-fit">
          <CheckCircle2 className="w-3 h-3" />
          Reward: {challenge.reward}
        </div>
      </CardContent>
    </Card>
  );
}
