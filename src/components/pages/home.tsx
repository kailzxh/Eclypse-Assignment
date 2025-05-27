import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import {PhilosophySection} from './PhilosophySection'

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[1440px] relative">
        <Header />
        <HeroSection />
        <PhilosophySection/>
        
      </div>
    </div>
  );
};