import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FolderKanban, HelpCircle, Zap, CheckCircle2 } from 'lucide-react';

const stages = [
  {
    title: 'Beginner',
    description: 'Learn the fundamentals and build your first applications.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-500',
    stats: {
      lessons: '24 Lessons',
      projects: '3 Projects',
      quizzes: '5 Quizzes',
      xp: '+1500 XP'
    }
  },
  {
    title: 'Intermediate',
    description: 'Dive deeper into frameworks, architecture, and state management.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    stats: {
      lessons: '42 Lessons',
      projects: '6 Projects',
      quizzes: '8 Quizzes',
      xp: '+3200 XP'
    }
  },
  {
    title: 'Advanced',
    description: 'Master performance optimization, testing, and deployment.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-500',
    stats: {
      lessons: '35 Lessons',
      projects: '4 Projects',
      quizzes: '7 Quizzes',
      xp: '+4500 XP'
    }
  },
  {
    title: 'Professional',
    description: 'Real-world system design, microservices, and leadership skills.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-500',
    stats: {
      lessons: '28 Lessons',
      projects: '2 Capstones',
      quizzes: '4 Quizzes',
      xp: '+6000 XP'
    }
  }
];

export default function RoadmapPreview() {
  return (
    <section id="roadmap" className="py-24 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Roadmaps</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Follow a structured, step-by-step path designed by industry experts. Never wonder what you should learn next.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={stage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-background bg-gradient-to-br z-10 -translate-x-1/2 shadow-sm flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${stage.color}`} />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 border-muted group overflow-hidden relative">
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${stage.color}`} />
                      <CardContent className="p-6 relative z-10">
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-4 ${stage.bgColor} ${stage.textColor}`}>
                          Stage {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{stage.title}</h3>
                        <p className="text-muted-foreground text-sm mb-6">{stage.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className={`flex items-center gap-2 text-sm font-medium ${isEven ? 'md:justify-end' : ''}`}>
                            <BookOpen className="w-4 h-4 text-muted-foreground" />
                            <span>{stage.stats.lessons}</span>
                          </div>
                          <div className={`flex items-center gap-2 text-sm font-medium ${isEven ? 'md:justify-end' : ''}`}>
                            <FolderKanban className="w-4 h-4 text-muted-foreground" />
                            <span>{stage.stats.projects}</span>
                          </div>
                          <div className={`flex items-center gap-2 text-sm font-medium ${isEven ? 'md:justify-end' : ''}`}>
                            <HelpCircle className="w-4 h-4 text-muted-foreground" />
                            <span>{stage.stats.quizzes}</span>
                          </div>
                          <div className={`flex items-center gap-2 text-sm font-medium ${isEven ? 'md:justify-end' : ''}`}>
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-yellow-600 dark:text-yellow-500">{stage.stats.xp}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
