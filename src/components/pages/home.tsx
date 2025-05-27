import React from 'react';
import { Header } from './Header';
// import { HeroSection } from '../components/home/HeroSection';
// import { PhilosophySection } from '../components/home/PhilosophySection';
// import { GallerySection } from '../components/home/GallerySection';
// import { ProductSection } from '../components/home/ProductSection';
// import { AccordionSection } from '../components/home/AccordionSection';
// import { TestimonialSection } from '../components/home/TestimonialSection';
// import { Footer } from '../components/layout/Footer';

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[1440px] relative">
        <Header />
        {/* <HeroSection />
        <PhilosophySection />
        <GallerySection />
        <ProductSection />
        <AccordionSection />
        <TestimonialSection />
        <Footer /> */}
      </div>
    </div>
  );
};