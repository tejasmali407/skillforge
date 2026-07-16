import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../features/dashboard/components/Sidebar';
import Topbar from '../../features/dashboard/components/Topbar';
import useAuthStore from '../../store/authStore';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuthStore();
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background text-foreground selection:bg-primary/30">
      {/* Sidebar (Fixed position from Sidebar component) */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <main className="flex flex-col min-h-screen lg:pl-[280px] relative w-full">
        
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Navigation (Sticky from Topbar component) */}
        <Topbar setIsOpen={setIsSidebarOpen} user={user} />

        {/* Page Content */}
        <div className="flex-1 relative z-10 w-full">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
}
