import React from 'react';
import HeroFeatures from './HeroFeatures';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero relative flex flex-col-reverse md:block mt-0 md:mt-[57px]">
      <aside className="relative z-[var(--z-docked)] md:px-6">
        <HeroFeatures />
      </aside>
      <div className="relative md:absolute -right-6 top-0 md:-top-18 z-[var(--z-base)] px-10 md:px-0">
        <Image
          src="/images/hero_cover_influe_mobile.png"
          alt="Hero Image"
          width={666}
          height={679}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
