import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, HelpCircle, Trophy, Clock, CheckCircle2 } from 'lucide-react';

const getActivityIcon = (type) => {
  switch (type) {
    case 'lesson':
      return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    case 'quiz':
      return <HelpCircle className="w-4 h-4 text-purple-500" />;
    case 'achievement':
      return <Trophy className="w-4 h-4 text-orange-500" />;
    default:
      return <Clock className="w-4 h-4 text-muted-foreground" />;
  }
};

const getActivityColor = (type) => {
  switch (type) {
    case 'lesson':
      return 'bg-emerald-500/10 border-emerald-500/20';
    case 'quiz':
      return 'bg-purple-500/10 border-purple-500/20';
    case 'achievement':
      return 'bg-orange-500/10 border-orange-500/20';
    default:
      return 'bg-secondary border-border';
  }
};

export default function RecentActivity({ activities }) {
  if (!activities || activities.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="h-full"
    >
      <Card className="h-full shadow-sm border-border/50 bg-background/60 backdrop-blur-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative border-l-2 border-border/50 ml-3 pl-6 space-y-6">
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[35px] top-0.5 p-1.5 rounded-full border bg-background shadow-sm ${getActivityColor(activity.type)} transition-transform group-hover:scale-110`}>
                  {getActivityIcon(activity.type)}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <p className="font-medium text-sm text-foreground">{activity.title}</p>
                    <p className="text-[11px] font-medium text-muted-foreground capitalize flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary ring-1 ring-inset ring-primary/20">
                    {activity.xp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
