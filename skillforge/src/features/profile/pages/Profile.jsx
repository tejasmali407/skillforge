import { motion } from 'framer-motion';
import { User, Mail, Calendar, Shield, Camera, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useAuthStore from '../../../store/authStore';

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1920px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Profile</h1>
          <p className="text-muted-foreground mt-2">Manage your public profile and personal details.</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="relative group">
            <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-semibold text-5xl shadow-xl">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-background border border-border rounded-full shadow-sm hover:bg-muted transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
              <Camera className="w-5 h-5 text-foreground" />
            </button>
          </div>
          
          <div className="flex-1 text-center sm:text-left space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center justify-center sm:justify-start gap-2">
                {user?.name || 'Developer User'}
                <Shield className="w-5 h-5 text-primary" />
              </h2>
              <p className="text-muted-foreground font-medium">Level {user?.level || 1} Developer</p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {user?.email || 'user@example.com'}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Joined July 2026
              </div>
            </div>
            
            <div className="flex justify-center sm:justify-start gap-3 pt-2">
              <Button>
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Details Form Card */}
        <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <Input defaultValue={user?.name || ''} placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <Input defaultValue={user?.email || ''} type="email" disabled />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Bio</label>
              <Input placeholder="Tell us about yourself..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Location</label>
              <Input placeholder="City, Country" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
