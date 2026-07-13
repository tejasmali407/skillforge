import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CareerSection from '../components/CareerSection';
import Features from '../components/Features';
import RoadmapPreview from '../components/RoadmapPreview';
import Gamification from '../components/Gamification';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CareerSection />
        <RoadmapPreview />
        <Gamification />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}

export default Home;
