import React from 'react';

const HeroHeader: React.FC = () => {
  return (
    <header className="text-center text-[25px] font-secondary font-extrabold leading-tight md:text-left md:text-[35px] md:font-bold hero-features-header">
      <p className="text-text-primary">
        Want to Turn Social Media Into a Profitable Career?
      </p>
      <p className="text-text-accent text-shadow-primary-glow">
        Discover your way to success with Fametonic:
      </p>
    </header>
  );
};

export default HeroHeader;
