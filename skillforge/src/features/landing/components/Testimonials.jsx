import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Frontend Developer at TechCorp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=e2e8f0',
    content: 'SkillForge completely transformed how I learn. The gamified approach kept me hooked, and the roadmaps took the guesswork out of what to learn next. I landed my first job within 6 months!',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Computer Science Student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=e2e8f0',
    content: 'The boss battles and XP system make practicing algorithms actually fun. I look forward to maintaining my daily streak. Best coding platform I\'ve ever used.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Self-Taught Backend Dev',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=e2e8f0',
    content: 'I was stuck in tutorial hell for a year before finding SkillForge. The structured projects and instant feedback in the playground finally gave me the confidence to build real systems.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Don't just take our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">word for it</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Join thousands of developers who have leveled up their careers using SkillForge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-card hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300 border-muted">
                <CardContent className="p-8 flex flex-col h-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-1 mb-6 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-background shadow-sm">
                      <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
