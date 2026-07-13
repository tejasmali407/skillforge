import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function FeatureCard({ title, description, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="h-full"
    >
      <Card 
        tabIndex={0}
        className="h-full relative overflow-hidden group hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.25)] transition-all duration-300 border-muted bg-background/50 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-default"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
        
        <CardContent className="p-6 relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-muted/50 border flex items-center justify-center text-foreground mb-5 group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
            <Icon className="w-7 h-7" />
          </div>
          
          <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
