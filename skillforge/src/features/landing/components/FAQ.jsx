import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is SkillForge really free to start?",
    answer: "Yes! You can start learning, tracking your XP, and completing the beginner roadmaps completely free. We also offer a premium tier for advanced projects, personalized AI mentorship, and exclusive boss battles."
  },
  {
    question: "How long does it take to complete a roadmap?",
    answer: "It depends on your pace and prior experience. A beginner roadmap like Frontend Engineering typically takes 3-6 months if you study 10-15 hours a week."
  },
  {
    question: "Do I need to install any software?",
    answer: "No! SkillForge features an integrated browser-based coding playground. You can write, test, and preview your code directly on our platform without any setup."
  },
  {
    question: "Will I get a certificate when I finish?",
    answer: "Yes, completing a full roadmap rewards you with a verified SkillForge Certificate that you can add directly to your LinkedIn profile or resume."
  },
  {
    question: "How does the gamification system work?",
    answer: "As you complete lessons and quizzes, you earn XP and level up. Maintaining a daily learning streak grants bonus multipliers. You also earn Coins which can be used to customize your avatar and unlock profile themes."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-muted/30 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-muted shadow-sm p-2 sm:p-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
