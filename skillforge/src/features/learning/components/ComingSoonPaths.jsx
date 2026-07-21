import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Server, ChartBar, Coffee, Brain } from 'lucide-react';

const IconMap = {
  Server,
  ChartBar,
  Coffee,
  Brain,
};

export default function ComingSoonPaths({ paths }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Future Paths</h2>
        <span className="text-sm font-medium text-muted-foreground px-3 py-1 bg-muted rounded-full">Coming Soon</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {paths.map((path, index) => {
          const Icon = IconMap[path.iconName] || Server;
          return (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-background/40 backdrop-blur-sm opacity-70 grayscale-[0.4] cursor-not-allowed hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-muted text-muted-foreground">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{path.title}</h3>
                    <p className="text-sm text-muted-foreground">{path.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
