import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Zap, Coins, Flame, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WelcomeHero({ user }) {
  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="border-0 shadow-xl overflow-hidden relative bg-gradient-to-br from-primary/90 via-primary to-purple-600 text-primary-foreground">

        {/* Animated Background Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-32 -top-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-32 -bottom-32 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl pointer-events-none"
        />

        <CardContent className="p-8 sm:p-10 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:items-center">

            {/* Left Content */}
            <div className="max-w-xl">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm border border-white/10">
                {user.rank || 'Beginner'} Rank
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Good Evening, {user.name} 👋
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-md">
                You're making great progress! Continue your Frontend Developer journey and unlock the next rank.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg rounded-full px-8 font-semibold">
                Resume Learning <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right Stats */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 shadow-inner">
                <div className="p-2.5 bg-white/20 rounded-xl shadow-sm">
                  <Star className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70 font-semibold uppercase tracking-wider mb-0.5">Level {user.level}</p>
                  <p className="text-2xl font-bold">{user.xp.toLocaleString()} <span className="text-sm font-medium text-primary-foreground/70">XP</span></p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-black/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/5">
                  <Coins className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{user.coins.toLocaleString()} Coins</span>
                </div>
                <div className="flex items-center gap-3 bg-black/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/5">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold">{user.streak || 0} Day Streak</span>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
