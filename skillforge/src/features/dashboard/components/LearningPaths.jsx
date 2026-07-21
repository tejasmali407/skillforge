import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Compass, ArrowRight, Lock, Clock, BarChart, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LearningPaths({ paths }) {
  if (!paths || paths.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Compass className="w-6 h-6 text-primary" />
          Explore Learning Paths
        </h2>
        <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground hover:text-foreground group">
          View All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6"
      >
        {paths.map((path) => (
          <motion.div key={path.id} variants={itemVariants} whileHover={path.active ? { y: -6 } : {}}>
            <Card className={`h-full flex flex-col border-border/40 shadow-sm transition-shadow duration-300 bg-background/60 backdrop-blur-md overflow-hidden group rounded-3xl
              ${path.active ? 'hover:shadow-lg hover:border-border/60' : 'opacity-70 bg-muted/20'}`}>
              
              {/* Illustration Placeholder */}
              <div className="h-32 w-full bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                {path.active && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
                {!path.active && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur-md">
                      <Lock className="w-3.5 h-3.5" /> Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{path.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md">
                    <BarChart className="w-3 h-3" /> {path.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3" /> {path.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                    <Zap className="w-3 h-3" /> {path.xpReward}
                  </span>
                </div>

                <div className="mt-auto pt-4">
                  {path.active ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-foreground">
                        <span>{path.progress}% Complete</span>
                        <span className="text-muted-foreground font-medium">{path.courses} Courses</span>
                      </div>
                      <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" 
                          style={{ width: `${path.progress}%` }} 
                        />
                      </div>
                    </div>
                  ) : (
                    <Button variant="secondary" className="w-full text-xs font-semibold" disabled>
                      Locked
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
