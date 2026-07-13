import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Trophy, 
  Flame, 
  Coins, 
  Swords, 
  Building2, 
  Medal, 
  Star,
  Zap,
  Target
} from 'lucide-react';

export default function Gamification() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative border-t border-border">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Experience a premium, gamified dashboard that tracks your progress and rewards your consistency.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Level Card & XP (Col Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="md:col-span-2"
          >
            <Card className="h-full bg-card overflow-hidden relative shadow-lg group border-muted hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Avatar/Level ring */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-muted flex items-center justify-center p-1">
                      <div className="w-full h-full rounded-full bg-muted overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" />
                      </div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full border-2 border-background shadow-sm">
                      Lvl 42
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex-1 w-full text-center sm:text-left mt-4 sm:mt-0">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">CodeMaster Pro</h3>
                        <p className="text-muted-foreground text-sm">Full Stack Developer Rank</p>
                      </div>
                      <div className="flex gap-4 mt-4 sm:mt-0">
                        <div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-600 px-3 py-1.5 rounded-full text-sm font-semibold border border-yellow-500/20">
                          <Coins className="w-4 h-4" /> 1,250
                        </div>
                        <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
                          <Zap className="w-4 h-4" /> 15.4k XP
                        </div>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span className="text-muted-foreground">Progress to Lvl 43</span>
                        <span className="text-primary font-bold">2,400 / 3,000 XP</span>
                      </div>
                      <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '80%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/20 to-transparent" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Daily Streak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 shadow-lg hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Flame className="w-10 h-10 text-orange-500" />
                  </motion.div>
                </div>
                <h3 className="text-4xl font-extrabold text-foreground mb-2">14 <span className="text-2xl text-muted-foreground">Days</span></h3>
                <p className="font-semibold text-orange-600 dark:text-orange-400 mb-6">Unstoppable Streak!</p>
                <div className="flex gap-2">
                  {['M','T','W','T','F','S','S'].map((day, i) => (
                    <div key={i} className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${i < 5 ? 'bg-orange-500 text-white' : 'bg-muted text-muted-foreground'}`}>
                      {day}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Boss Battle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full overflow-hidden group shadow-lg border-muted hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] transition-all duration-300">
              <div className="h-32 bg-gradient-to-r from-red-900 to-red-600 relative flex items-center justify-center">
                <Swords className="w-16 h-16 text-red-300 opacity-20 absolute" />
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Dragon&backgroundColor=transparent" alt="Boss" className="h-24 w-24 relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 mb-3">Weekly Boss</span>
                <h3 className="text-xl font-bold mb-2">The CSS Dragon</h3>
                <p className="text-sm text-muted-foreground mb-4">Master CSS Grid to defeat the beast and claim legendary loot.</p>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-red-500">HP: 450/1000</span>
                  <span className="text-primary">+500 Coins</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* City Builder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full overflow-hidden group shadow-lg border-muted hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
              <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-500 relative flex flex-col items-center justify-end pb-4">
                <Building2 className="w-24 h-24 text-emerald-300 opacity-20 absolute top-2" />
                <div className="flex items-end gap-1 relative z-10 text-emerald-100 group-hover:text-white transition-colors">
                  <Building2 className="w-8 h-12" />
                  <Building2 className="w-12 h-16" />
                  <Building2 className="w-10 h-14" />
                </div>
              </div>
              <CardContent className="p-6">
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground mb-3 bg-emerald-500 hover:bg-emerald-600">City Builder</span>
                <h3 className="text-xl font-bold mb-2">Tech Metropolis</h3>
                <p className="text-sm text-muted-foreground mb-4">Your knowledge city is growing! New server towers unlocked.</p>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-emerald-500">Level 5</span>
                  <span className="text-primary">+2% XP Boost</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Badges & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full bg-card shadow-lg border-muted hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'First Blood', desc: 'Completed first challenge', icon: Target, color: 'text-red-500', bg: 'bg-red-500/10' },
                    { title: 'Night Owl', desc: 'Coded past midnight', icon: Star, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                    { title: 'Bug Smasher', desc: 'Fixed 50 errors', icon: Medal, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                  ].map((ach, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${ach.bg} ${ach.color} flex items-center justify-center`}>
                        <ach.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">{ach.title}</div>
                        <div className="text-xs text-muted-foreground">{ach.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
