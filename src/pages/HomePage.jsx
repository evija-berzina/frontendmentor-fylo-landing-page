import { useRef } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProductOverview } from '../components/ProductOverview';
import { ReviewsSection } from '../components/ReviewsSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import './HomePage.css';

export function HomePage() {
  const ctaRef = useRef();

  const scrollToCTA = () => {
    ctaRef.current.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <>
      <Header />
      <main>
        <Hero scrollToCTA={scrollToCTA} />
        <Features />
        <ProductOverview />
        <ReviewsSection />
        <CTASection ref={ctaRef} />
      </main>
      <Footer />
    </>
  );
}