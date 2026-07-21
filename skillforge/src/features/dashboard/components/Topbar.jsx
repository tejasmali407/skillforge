import { useState } from 'react';
import { Bell, Search, Sun, Moon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useTheme } from '../../../hooks/useTheme';

export default function Topbar({ setIsOpen, user }) {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleNotificationClick = () => {
    toast.info('Notifications coming soon.');
  };

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 h-16 sm:h-20 px-4 sm:px-8 bg-background/80 backdrop-blur-md border-b border-border/40 w-full transition-colors duration-300">
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
      <div className="relative hidden md:block flex-1 max-w-md lg:max-w-xl group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
        <Input
          type="search"
          placeholder="Search for courses, challenges..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 bg-muted/40 border-border/40 hover:bg-muted/60 focus:bg-background focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-full h-10 sm:h-11 transition-all duration-300 shadow-sm"
        />
      </div>

      <div className="flex-1 md:hidden" /> {/* Spacer on mobile */}

      {/* Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-auto">
        <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-muted/50 rounded-full w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-colors" onClick={toggleTheme}>
          {theme === 'dark' ? <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-foreground transition-colors" /> : <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-foreground transition-colors" />}
        </Button>

        <Button variant="ghost" size="icon" className="relative hover:bg-muted/50 rounded-full w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-colors" onClick={handleNotificationClick}>
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-foreground transition-colors" />
          <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-2 h-2 rounded-full bg-primary border-2 border-background animate-pulse"></span>
        </Button>

        <div className="h-6 sm:h-8 w-px bg-border/40 hidden sm:block mx-1 shrink-0"></div>

        <div className="flex items-center gap-2 sm:gap-3 p-1.5 pr-3 text-left">
          <div className="relative">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-md">
              {user?.name?.charAt(0) || 'A'}
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none mb-1 text-foreground">
              {user?.name || 'Developer'}
            </p>
            <p className="text-[11px] font-medium text-muted-foreground leading-none">
              Level {user?.level || 1}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
