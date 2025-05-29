import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import {PhilosophySection} from './PhilosophySection'
import { GallerySection } from './Gallery';
import { ProductSection } from './product';
import { AccordionSection } from './accordion';
import { TestimonialSection } from './testimonial';
import { Footer } from './footer';

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[1440px] relative">
        <Header />
        <HeroSection />
        <PhilosophySection/>
        <GallerySection/>
         <ProductSection />
        <AccordionSection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
};