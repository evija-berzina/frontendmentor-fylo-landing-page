import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProductOverview } from '../components/ProductOverview';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductOverview />
      </main>
      {/* <Footer /> */}
    </>
  );
}