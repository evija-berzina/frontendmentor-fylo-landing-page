import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProductOverview } from '../components/ProductOverview';
import { ReviewsSection } from '../components/ReviewsSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductOverview />
        <ReviewsSection />
        <CTASection />
      </main>
      {/* <Footer /> */}
    </>
  );
}