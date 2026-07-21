import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContinueLearningCard({ current }) {
  const navigate = useNavigate();

  if (!current) return null;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-md border-border/40 bg-background/80 backdrop-blur-md overflow-hidden relative group rounded-3xl transition-shadow hover:shadow-lg hover:border-border/60">
        
        {/* Subtle accent gradient */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary/50 opacity-80" />

        <CardContent className="p-5">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                <BookOpen className="w-3.5 h-3.5" />
                {current.path}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {current.timeRemaining}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {current.module}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mb-6">
              Lesson: {current.lesson}
            </p>

            <div className="space-y-2 mt-6">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground">{current.progress}% Complete</span>
              </div>
              <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${current.progress}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                />
              </div>
            </div>
          </div>
          
          <Button onClick={() => navigate('/learning')} className="w-full mt-5 group-hover:shadow-md transition-all gap-2" size="lg">
            <PlayCircle className="w-5 h-5" />
            Resume Lesson
            <ChevronRight className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
