import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { 
  Trophy, 
  Award,
  ArrowRight,
  Map as MapIcon,
  Sparkles
} from 'lucide-react';

const floatingAnimation = {
  y: ['-10%', '10%'],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Animated Background Gradients & Elements */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70" 
      />
      
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{ 
            y: ['-20vh', '20vh'],
            x: Math.random() > 0.5 ? ['-10vw', '10vw'] : ['10vw', '-10vw'],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ 
            duration: 10 + i * 2, 
            repeat: Infinity, 
            repeatType: 'reverse', 
            ease: "easeInOut" 
          }}
          className="absolute hidden md:block w-3 h-3 rounded-full bg-primary/30 z-0"
          style={{ 
            top: `${20 * (i + 1)}%`, 
            left: `${15 * (i + 1)}%` 
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border text-sm text-muted-foreground w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>The #1 Gamified Coding Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Become a Software Engineer, <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                The Fun Way.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Master software engineering through interactive roadmaps, 
              real-world projects, coding playground, XP, badges, and gamification.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center lg:justify-start w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  to="/signup"
                  aria-label="Start Learning Free"
                  className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-12 px-8 text-base group shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.8)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" })}
                >
                  Start Learning Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  to="/#roadmaps"
                  aria-label="Explore Roadmaps"
                  className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-12 px-8 text-base group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" })}
                >
                  Explore Roadmaps
                  <MapIcon className="ml-2 w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
            
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex -space-x-3" aria-hidden="true">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e2e8f0`} alt={`Student avatar ${i}`} loading="lazy" />
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold text-foreground">10,000+</span> developers joined
              </div>
            </div>
          </motion.div>

          {/* Abstract Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block"
          >
            {/* Main Editor Card */}
            <motion.div 
              animate={floatingAnimation}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-56 bg-card border shadow-2xl rounded-xl overflow-hidden z-20"
            >
              <div className="flex items-center px-4 py-2 bg-muted/50 border-b gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-2 text-xs text-muted-foreground font-mono">App.jsx</div>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-blue-500">function <span className="text-yellow-500">MasterCode</span>() {'{'}</div>
                <div className="pl-4 text-primary mt-2">const skills = useLearn();</div>
                <div className="pl-4 text-primary mt-1">const level = useXP();</div>
                <div className="pl-4 text-green-500 mt-2">return (</div>
                <div className="pl-8 text-foreground mt-1">&lt;Success level={'{'}level{'}'} /&gt;</div>
                <div className="pl-4 text-green-500 mt-1">)</div>
                <div className="text-blue-500 mt-2">{'}'}</div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: ['10%', '-10%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute top-12 left-12 bg-card p-4 rounded-2xl shadow-xl border flex items-center gap-3 z-30"
            >
              <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold">React Master</div>
                <div className="text-xs text-muted-foreground">+500 XP</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: ['-10%', '10%'] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-16 right-8 bg-card p-3 rounded-2xl shadow-xl border flex items-center gap-3 z-30"
            >
              <div className="p-2 bg-blue-500/20 text-blue-500 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold">Level 10</div>
                <div className="text-xs text-muted-foreground">Keep going!</div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-12 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-2xl opacity-50 z-10" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 left-8 w-16 h-16 border-4 border-dashed border-primary/30 rounded-full z-10"
            />
            <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent -rotate-45 z-10" />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
