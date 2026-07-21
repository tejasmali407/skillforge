import { motion } from 'framer-motion';
import { PlayCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function ContinueLearning({ module, lesson }) {
  const navigate = useNavigate();

  if (!module || !lesson) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="border-border/50 shadow-sm bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <CardContent className="p-6 sm:p-8 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Up Next
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">
                {lesson.title}
              </h2>
              <p className="text-muted-foreground font-medium">
                Module: {module.title}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>~ 15 mins</span>
            </div>
          </div>

          <Button onClick={() => navigate(`/learning/lesson/${lesson.id}`)} size="lg" className="shrink-0 w-full sm:w-auto shadow-md group">
            <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Resume Learning
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
