import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UpcomingUnlock({ unlock }) {
  if (!unlock) return null;

  const progressPercentage = (unlock.currentLevel / unlock.requiredLevel) * 100;

  return (
    <Card className="border-border/40 shadow-sm bg-background/60 backdrop-blur-md overflow-hidden relative group rounded-2xl hover:shadow-md hover:border-border/60 transition-all duration-300">
      
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardContent className="p-4 relative z-10">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-muted rounded-xl border border-border/50">
            <Lock className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm text-foreground mb-1">{unlock.title}</h3>
            <p className="text-[11px] font-medium text-muted-foreground mb-2">
              Unlocks at Level {unlock.requiredLevel}
            </p>
            
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-primary/70 rounded-full"
                />
              </div>
              <p className="text-[10px] font-bold text-primary text-right">
                {unlock.requiredLevel - unlock.currentLevel} levels to go
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
