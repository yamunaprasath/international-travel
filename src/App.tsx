import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { DestinationsSection } from './components/DestinationsSection';
import { OperatorsSection } from './components/OperatorsSection';
import { JobsSection } from './components/JobsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <DestinationsSection />
      <OperatorsSection />
      <JobsSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
