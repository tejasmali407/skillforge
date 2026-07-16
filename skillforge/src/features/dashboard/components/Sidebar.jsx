import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Map,
  BookOpen,
  Code,
  HelpCircle,
  Trophy,
  Gift,
  Medal,
  User,
  Settings,
  LogOut,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Learning Roadmap', icon: Map, path: '#roadmap' },
  { name: 'Courses', icon: BookOpen, path: '#courses' },
  { name: 'Playground', icon: Code, path: '#playground' },
  { name: 'Quizzes', icon: HelpCircle, path: '#quizzes' },
  { name: 'Achievements', icon: Trophy, path: '#achievements' },
  { name: 'Rewards', icon: Gift, path: '#rewards' },
  { name: 'Leaderboard', icon: Medal, path: '#leaderboard' },
  { name: 'Profile', icon: User, path: '#profile' },
  { name: 'Settings', icon: Settings, path: '#settings' },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-background/60 backdrop-blur-xl border-r border-border/50 flex flex-col lg:translate-x-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:transition-none`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              SkillForge
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-muted/50 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 scrollbar-hide">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-3 py-3 rounded-full text-sm font-medium transition-all duration-200 ${isActive && item.path === '/dashboard'
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${isActive && item.path === '/dashboard' ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
                      {item.name}
                    </div>
                    {isActive && item.path === '/dashboard' && (
                      <motion.div
                        layoutId="active-nav"
                        className="w-1.5 h-1.5 rounded-full bg-primary-foreground mr-1"
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/30">
          <button className="group flex items-center justify-between w-full px-3 py-3 rounded-full text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
              Logout
            </div>
          </button>
        </div>
      </motion.aside>
    </>
  );
}
