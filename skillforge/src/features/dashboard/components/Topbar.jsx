import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, Sun, Moon, Menu, ChevronDown, User, Trophy, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { logout } from '../../../services/authService';
import { useTheme } from '../../../hooks/useTheme';

function DropdownItem({ icon: Icon, label, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors ${className}`}>
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}

function ProfileDropdown({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      // Error is handled by authService
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 sm:gap-3 hover:bg-muted/50 p-1.5 pr-3 rounded-full transition-colors text-left group"
      >
        <div className="relative">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-md">
            {user?.name?.charAt(0) || 'A'}
          </div>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold leading-none mb-1 text-foreground group-hover:text-primary transition-colors">
            {user?.name || 'Developer'}
          </p>
          <p className="text-[11px] font-medium text-muted-foreground leading-none">
            Level {user?.level || 1}
          </p>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground hidden sm:block group-hover:text-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 rounded-xl border border-border/50 bg-background shadow-lg backdrop-blur-xl z-50 overflow-hidden"
          >
            <div className="p-3 border-b border-border/50 sm:hidden">
              <p className="text-sm font-semibold text-foreground">
                {user?.name || 'Developer'}
              </p>
              <p className="text-xs text-muted-foreground">
                Level {user?.level || 1}
              </p>
            </div>
            <div className="p-2 space-y-1">
              <DropdownItem icon={User} label="Profile" onClick={() => { setIsOpen(false); navigate('/profile'); }} />
              <DropdownItem icon={Trophy} label="Achievements" onClick={() => { setIsOpen(false); navigate('/achievements'); }} />
              <DropdownItem icon={Settings} label="Settings" onClick={() => { setIsOpen(false); navigate('/settings'); }} />
            </div>
            <div className="p-2 border-t border-border/50">
              <DropdownItem icon={LogOut} label="Logout" className="text-destructive hover:bg-destructive/10 hover:text-destructive" onClick={handleLogout} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Topbar({ setIsOpen, user }) {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleNotificationClick = () => {
    toast.info('Notifications coming soon.');
  };

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 h-20 px-4 sm:px-8 bg-background/60 backdrop-blur-xl border-b border-border/30 w-full">
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden hover:bg-muted/50 rounded-full shrink-0"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Search Bar - Flex 1 & Shrinks appropriately */}
      <div className="relative hidden md:block flex-1 max-w-xl group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          type="search"
          placeholder="Search for courses, challenges..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 bg-muted/30 border-transparent hover:bg-muted/50 focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/10 rounded-full h-11 transition-all"
        />
      </div>

      <div className="flex-1 md:hidden" /> {/* Spacer on mobile */}

      {/* Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-auto">
        <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-muted/50 rounded-full w-10 h-10 shrink-0" onClick={toggleTheme}>
          {theme === 'dark' ? <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /> : <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />}
        </Button>

        <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 rounded-full w-10 h-10 shrink-0" onClick={handleNotificationClick}>
          <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary border-2 border-background animate-pulse"></span>
        </Button>

        <div className="h-8 w-px bg-border/50 hidden sm:block mx-1 shrink-0"></div>

        <ProfileDropdown user={user} />
      </div>
    </header>
  );
}
