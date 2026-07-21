import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Lock, ChevronDown, Code, Palette, Terminal, Atom, Check, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IconMap = {
  Code,
  Palette,
  Terminal,
  Atom,
};

export default function RoadmapTimeline({ modules }) {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (moduleId, status) => {
    if (status === 'locked') return; // Cannot open locked modules
    setExpandedModule(prev => (prev === moduleId ? null : moduleId));
  };

  return (
    <div className="relative space-y-6">
      {/* Vertical Timeline Line */}
      <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border/50 hidden sm:block z-0" />

      {modules.map((module, index) => {
        const Icon = IconMap[module.iconName] || Code;
        const isCompleted = module.status === 'completed';
        const isCurrent = module.status === 'current';
        const isLocked = module.status === 'locked';
        const isExpanded = expandedModule === module.id;

        let statusColor = 'text-muted-foreground bg-muted'; // locked
        let borderColor = 'border-border/50';
        
        if (isCompleted) {
          statusColor = 'text-green-500 bg-green-500/10';
          borderColor = 'border-green-500/30';
        } else if (isCurrent) {
          statusColor = 'text-primary bg-primary/10';
          borderColor = 'border-primary/50';
        }

        return (
          <div key={module.id} className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 group">
            
            {/* Timeline Node */}
            <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full border-2 border-background shadow-sm items-center justify-center transition-colors duration-300 mt-2 bg-background z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${statusColor}`}>
                {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : isLocked ? <Lock className="w-4 h-4" /> : <span className="font-bold text-sm">{index + 1}</span>}
              </div>
            </div>

            {/* Module Card */}
            <div className="flex-1 min-w-0">
              <div 
                onClick={() => toggleModule(module.id, module.status)}
                className={`w-full bg-background/60 backdrop-blur-md border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${borderColor} ${isLocked ? 'opacity-60 grayscale-[0.3] cursor-not-allowed' : 'hover:shadow-md hover:border-primary/40 cursor-pointer'} ${isExpanded ? 'shadow-md border-primary/40' : 'shadow-sm'}`}
              >
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 p-3 rounded-xl ${statusColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-xl font-bold ${isLocked ? 'text-muted-foreground' : 'text-foreground'}`}>
                          {module.title}
                        </h3>
                        {isCompleted && <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">Completed</span>}
                        {isCurrent && <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">In Progress</span>}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="shrink-0 pt-2 sm:pt-0 text-muted-foreground">
                    {!isLocked && (
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`} />
                    )}
                  </div>
                </div>

                {/* Desktop Meta Stats */}
                <div className="hidden sm:flex items-center gap-6 mt-4 pt-4 border-t border-border/50 text-xs font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {module.difficulty}</div>
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {module.estimatedTime}</div>
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> {module.xpReward} XP</div>
                  <div className="flex items-center gap-1.5 ml-auto"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> {module.lessons.filter(l => l.completed).length} / {module.lessons.length} Lessons</div>
                </div>

                {/* Mobile Meta Stats */}
                <div className="flex sm:hidden items-center flex-wrap gap-3 mt-4 pt-4 border-t border-border/50 text-[11px] font-medium text-muted-foreground">
                  <span>{module.estimatedTime}</span>
                  <span>•</span>
                  <span>{module.xpReward} XP</span>
                  <span>•</span>
                  <span>{module.lessons.filter(l => l.completed).length}/{module.lessons.length}</span>
                </div>
              </div>

              {/* Accordion Lessons List */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pl-2 sm:pl-12 space-y-2 pb-2">
                      {module.lessons.map((lesson, idx) => (
                        <div 
                          key={lesson.id}
                          className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-colors ${lesson.completed ? 'bg-background/40 border-border/50' : 'bg-background border-border hover:border-primary/30 shadow-sm'}`}
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className={`shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border ${lesson.completed ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-muted border-border text-muted-foreground'}`}>
                              {lesson.completed ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <span className="text-[10px] sm:text-xs font-bold">{idx + 1}</span>}
                            </div>
                            <span className={`text-sm sm:text-base font-medium ${lesson.completed ? 'text-muted-foreground line-through decoration-muted-foreground/30' : 'text-foreground'}`}>
                              {lesson.title}
                            </span>
                            {lesson.isProject && (
                              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-wider border border-orange-500/20">
                                Project
                              </span>
                            )}
                          </div>
                          
                          <Button 
                            variant={lesson.completed ? "ghost" : "secondary"} 
                            size="sm"
                            className={lesson.completed ? "text-muted-foreground" : "text-primary hover:text-primary"}
                          >
                            <PlayCircle className={`w-4 h-4 ${lesson.completed ? '' : 'sm:mr-2'}`} />
                            <span className="hidden sm:inline-block">{lesson.completed ? 'Review' : 'Start'}</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
