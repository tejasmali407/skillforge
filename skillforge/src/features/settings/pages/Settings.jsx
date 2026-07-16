import { motion } from 'framer-motion';
import { Bell, Lock, Eye, Monitor, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Settings() {
  const sections = [
    {
      id: 'account',
      title: 'Account Settings',
      icon: Lock,
      description: 'Manage your password and security preferences.',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      description: 'Control what alerts and emails you receive.',
    },
    {
      id: 'appearance',
      title: 'Appearance',
      icon: Monitor,
      description: 'Customize the look and feel of your dashboard.',
    },
    {
      id: 'privacy',
      title: 'Privacy',
      icon: Eye,
      description: 'Manage who can see your profile and activity.',
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1920px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences and system settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <button 
                  key={section.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${idx === 0 ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-muted-foreground'}`}
                >
                  <Icon className="w-5 h-5" />
                  {section.title}
                </button>
              );
            })}
          </div>

          {/* Settings Content Area */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Change Password
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Current Password</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">New Password</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Confirm New Password</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="pt-4 flex justify-end">
                  <Button>Update Password</Button>
                </div>
              </div>
            </div>

            <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-destructive">
                Danger Zone
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive" className="w-full sm:w-auto">
                Delete Account
              </Button>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
