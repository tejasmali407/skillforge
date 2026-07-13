import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, BarChart } from 'lucide-react';

export default function CareerCard({ title, description, icon: Icon, difficulty, duration, comingSoon, index }) {
  const isBeginner = difficulty.toLowerCase() === 'beginner';
  const isIntermediate = difficulty.toLowerCase() === 'intermediate';
  const isAdvanced = difficulty.toLowerCase() === 'advanced';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card 
        tabIndex={0}
        className="h-full relative overflow-hidden group hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300 border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-default"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
        
        <CardContent className="p-6 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            {comingSoon && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground border">
                Coming Soon
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm flex-grow mb-6">{description}</p>
          
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <BarChart className={`w-4 h-4 ${isBeginner ? 'text-green-500' : isIntermediate ? 'text-yellow-500' : 'text-red-500'}`} />
              <span>{difficulty}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>{duration}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
