import { Card, CardContent } from '@/components/ui/card';
import { Medal } from 'lucide-react';

export default function LeaderboardPreview({ leaderboard, user: currentUser }) {
  if (!leaderboard || leaderboard.length === 0) return null;

  return (
    <Card className="border-border/40 shadow-sm bg-background/60 backdrop-blur-md rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 bg-yellow-500/10 rounded-lg">
            <Medal className="w-4 h-4 text-yellow-500" />
          </div>
          <h3 className="font-bold text-sm text-foreground">Top Learners</h3>
        </div>
        
        <div className="space-y-3">
          {leaderboard.map((user, index) => {
            const isMe = user.isCurrentUser;
            const displayName = isMe ? `${currentUser?.name || 'You'} (You)` : user.name;
            const displayXp = isMe ? (currentUser?.xp || 0) : user.xp;

            return (
              <div 
                key={user.id} 
                className={`flex items-center justify-between p-2 rounded-lg transition-colors ${isMe ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/50'}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-bold w-4 text-center ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-400' : index === 2 ? 'text-amber-700' : 'text-muted-foreground'}`}>
                    {index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-muted to-muted-foreground/30 flex items-center justify-center text-[10px] font-bold text-foreground">
                      {displayName.charAt(0)}
                    </div>
                    <span className={`text-sm font-semibold ${isMe ? 'text-primary' : 'text-foreground'}`}>
                      {displayName}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-muted-foreground">
                  {displayXp.toLocaleString()} XP
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
