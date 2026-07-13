import { motion } from 'framer-motion';
import CareerCard from './CareerCard';
import { Layout, Server, Coffee, FileCode2, Smartphone, Sparkles } from 'lucide-react';

const careerPaths = [
  {
    title: 'Frontend Engineering',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks like React. Build beautiful, responsive, and interactive user interfaces.',
    icon: Layout,
    difficulty: 'Beginner',
    duration: '3-6 months',
    comingSoon: false,
  },
  {
    title: 'Backend Engineering',
    description: 'Learn Node.js, databases, APIs, and server architecture. Build robust and scalable server-side applications.',
    icon: Server,
    difficulty: 'Intermediate',
    duration: '4-8 months',
    comingSoon: false,
  },
  {
    title: 'Java Development',
    description: 'Master core Java, Spring Boot, and enterprise application development. Become a highly sought-after enterprise developer.',
    icon: Coffee,
    difficulty: 'Beginner',
    duration: '4-6 months',
    comingSoon: false,
  },
  {
    title: 'Python Development',
    description: 'Learn Python programming, data structures, and popular frameworks like Django. The perfect starting point for your coding journey.',
    icon: FileCode2,
    difficulty: 'Beginner',
    duration: '2-5 months',
    comingSoon: false,
  },
  {
    title: 'Mobile Development',
    description: 'Build native iOS and Android applications using React Native or Flutter. Take your apps to millions of mobile devices.',
    icon: Smartphone,
    difficulty: 'Intermediate',
    duration: '5-8 months',
    comingSoon: true,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Dive deep into algorithms, neural networks, and data science. Build intelligent systems of the future.',
    icon: Sparkles,
    difficulty: 'Advanced',
    duration: '6-12 months',
    comingSoon: true,
  },
];

export default function CareerSection() {
  return (
    <section id="career-paths" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Career Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Structured, step-by-step learning roadmaps designed to take you from absolute beginner to job-ready professional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <CareerCard key={path.title} {...path} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
